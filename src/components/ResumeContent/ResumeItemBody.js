export default function ResumeItemBody({ bulletPoints, technologies }) {
  return (
    <ul>
      {bulletPoints.map((bulletPoint) => (
        <li>{bulletPoint}</li>
      ))}
      <li>
        <em>{technologies}.</em>
      </li>
    </ul>
  );
}
