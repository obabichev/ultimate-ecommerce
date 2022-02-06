export interface Profile {
  id: string;
  active: boolean;
  expires_at: Date;
  authenticated_at: Date;
  authenticator_assurance_level: string;
  authentication_methods: AuthenticationMethod[];
  issued_at: Date;
  identity: Identity;
}

export interface AuthenticationMethod {
  method: string;
  completed_at: Date;
}

export interface Identity {
  id: string;
  schema_id: string;
  schema_url: string;
  state: string;
  state_changed_at: Date;
  traits: Traits;
  verifiable_addresses: VerifiableAddress[];
  recovery_addresses: RecoveryAddress[];
  created_at: Date;
  updated_at: Date;
}

export interface RecoveryAddress {
  id: string;
  value: string;
  via: string;
  created_at: Date;
  updated_at: Date;
}

export interface Traits {
  email: string;
  name: Name;
}

export interface Name {
  first: string;
  last: string;
}

export interface VerifiableAddress {
  id: string;
  value: string;
  verified: boolean;
  via: string;
  status: string;
  verified_at: Date;
  created_at: Date;
  updated_at: Date;
}
