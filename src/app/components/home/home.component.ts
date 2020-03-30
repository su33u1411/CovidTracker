import {Component, OnInit} from '@angular/core';
import {Caller, ExposureChecker, HealthConditionChecker, Referral, SymptomChecker} from '../model/caller';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  caller = new Caller();
  symptomsChecker = new SymptomChecker();
  $event: any;
  request = {};
  referral = new Referral();
  exposureChecker = new ExposureChecker();
  healthConditionChecker = new HealthConditionChecker();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submitRequest() {
    this.request = {
      caller: this.caller,
      symptomsChecker: this.symptomsChecker,
      referral: this.referral,
      exposureChecker: this.exposureChecker,
      healthConditionChecker: this.healthConditionChecker
    };
    console.log(this.request);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.post('https://hungrypanda.us/covid19/tracker/submit-data', this.request, {headers}).subscribe((response) => {
      console.log(response);
    });
  }

  addStandardSymptom(input) {
    if (this.symptomsChecker.standardSymptoms.has(input.target.value)) {
      this.symptomsChecker.standardSymptoms.delete(input.target.value);
    } else {
      this.symptomsChecker.standardSymptoms.add(input.target.value);
    }
  }

  addEmergencySymptom(input) {
    if (this.symptomsChecker.emergencySymptoms.has(input.target.value)) {
      this.symptomsChecker.emergencySymptoms.delete(input.target.value);
    } else {
      this.symptomsChecker.emergencySymptoms.add(input.target.value);
    }
  }

  setClinicalReferral() {
    this.referral.clinicalReferral = !this.referral.clinicalReferral;
  }

  setTravelledExposure() {
    this.exposureChecker.highRiskAreaTravel = !this.exposureChecker.highRiskAreaTravel;
  }

  setLivesExposure() {
    this.exposureChecker.highRiskAreaResident = !this.exposureChecker.highRiskAreaResident;
  }

  addExposure(input) {
    if (this.exposureChecker.exposures.has(input.target.value)) {
      this.exposureChecker.exposures.delete(input.target.value);
    } else {
      this.exposureChecker.exposures.add(input.target.value);
    }
  }

  addRiskFactors(input) {
    if (this.healthConditionChecker.riskFactors.has(input.target.value)) {
      this.healthConditionChecker.riskFactors.delete(input.target.value);
    } else {
      this.healthConditionChecker.riskFactors.add(input.target.value);
    }
  }

  addUnderlyingHealthConditions(input) {
    if (this.healthConditionChecker.underlyingHealthConditions.has(input.target.value)) {
      this.healthConditionChecker.underlyingHealthConditions.delete(input.target.value);
    } else {
      this.healthConditionChecker.underlyingHealthConditions.add(input.target.value);
    }
  }
}
