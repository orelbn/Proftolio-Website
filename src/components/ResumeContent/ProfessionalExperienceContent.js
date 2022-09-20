import ResumeSubheader from "./ResumeSubHeader";

const ProfessionalExperienceContent = () => {
  return (
    <div>
      <div>
        <ResumeSubheader
          title="Web Developer Co-op "
          info="Invoke Co., Vancouver"
          date="Sep 2022 – Dec 2022"
        />
        <ul>
          <li>
            Developed, tested, and deployed new features for “Incrowd,” a
            live-streaming platform that leverages mobile cameras for streaming.
            The platform allows multiple synchronized perspectives of a live
            event and stores recordings for future playback.
          </li>
          <li>
            Enabled users to select an audio source from the perspectives
            available, independent of the video source.
          </li>
          <li>
            Refactored the existing code base to improve the architecture and
            code consistency.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperienceContent;
