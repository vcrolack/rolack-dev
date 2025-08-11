// src/components/experience/TechTag.tsx
export function TechTag({ imgTech }: { imgTech: string }) {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        display: "flex",
        marginRight: "0.5rem",
      }}
    >
      <img src={imgTech} className="xp__tag" />
    </div>
  );
}
