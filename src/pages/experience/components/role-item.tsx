// src/components/experience/RoleItem.tsx
import { Role } from "../../../interfaces/role";
import { DateRange } from "./date-range";
import { TechTag } from "./tech-tag";

export function RoleItem({ role }: { role: Role }) {
  return (
    <li className="xp__role">
      <div className="xp__role-head">
        <h3 className="xp__role-title">{role.title}</h3>
        <DateRange start={role.start} end={role.end} />
      </div>

      {role.description?.length > 0 && (
        <ul className="xp__desc">
          {role.description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}

      {role.stack && role.stack.length > 0 && (
        <div className="xp__tags">
          {role.stack.map((t) => (
            <TechTag key={t} imgTech={t} />
          ))}
        </div>
      )}
    </li>
  );
}
