export class Caller {
  age: number;
  city: string;
  firstName: string;
  hhCount: number;
  lastName: string;
  phone: string;
  soughtTreatment: boolean;
  state: string;
  zip: string;

  constructor() {
    this.age = null;
    this.city = '';
    this.firstName = '';
    this.hhCount = 0;
    this.lastName = '';
    this.soughtTreatment = false;
    this.state = '';
    this.zip = '';
  }
}

export class SymptomChecker {
  emergencySymptoms: Set<string>;
  standardSymptoms: Set<string>;

  constructor() {
    this.standardSymptoms = new Set<string>();
    this.emergencySymptoms = new Set<string>();
  }
}

export class Referral {
  clinicalReferral: boolean;
  referredTo: string;

  constructor() {
    this.clinicalReferral = false;
    this.referredTo = '';
  }
}

export class ExposureChecker {
  exposures: Set<string>;
  highRiskAreaResident: boolean;
  highRiskAreaTravel: boolean;

  constructor() {
    this.exposures = new Set<string>();
    this.highRiskAreaResident = false;
    this.highRiskAreaTravel = false;
  }
}

export class HealthConditionChecker {
  riskFactors: Set<string>;
  underlyingHealthConditions: Set<string>;
  otherConditions: string;

  constructor() {
    this.riskFactors = new Set<string>();
    this.underlyingHealthConditions =  new Set<string>();
    this.otherConditions = '';
  }
}
