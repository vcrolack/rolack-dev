import { Role } from "./role";

export interface CompanyExperience {
  id: string;
  company: string;
  website?: string;
  logoUrl: string;
  location?: string;
  roles: Role[];
}
