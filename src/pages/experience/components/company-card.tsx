// src/components/experience/CompanyCard.tsx
import { CompanyExperience } from "../../../interfaces/company-experience";
import { RoleItem } from "./role-item";

export function CompanyCard({ company }: { company: CompanyExperience }) {
  const { company: companyName, website, location, logoUrl, roles } = company;
  return (
    <article className="xp__company" aria-label={companyName}>
      <header className="xp__company-head">
        {logoUrl && (
          <img src={logoUrl} alt={`${name} logo`} className="xp__logo" />
        )}
        <div>
          <h2 className="xp__company-name">
            {website ? (
              <a href={website} target="_blank" rel="noreferrer">
                {companyName}
              </a>
            ) : (
              ""
            )}
          </h2>
          {location && <p className="xp__location">{location}</p>}
        </div>
      </header>

      <ol className="xp__roles" aria-label={`Roles en ${name}`}>
        {roles
          .slice()
          .sort(
            (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
          )
          .map((role) => (
            <RoleItem key={role.id} role={role} />
          ))}
      </ol>
    </article>
  );
}
