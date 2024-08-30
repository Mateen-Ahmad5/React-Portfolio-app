import "./Experience.css";

const Experience = ({
  heading,
  companyName,
  startDate,
  endDate,
  description,
  isEditMode,
  onCompanyNameChange,
  onStartDateChange,
  onEndDateChange,
  onDescriptionChange,
}) => {
  return (
    <div className="experience-section">
      <h3>{heading}</h3>
      <div className="experience">
        <h4>
          Company Name:
          {isEditMode ? (
            <input
              type="text"
              value={companyName}
              onChange={(e) => onCompanyNameChange(e.target.value)}
            />
          ) : (
            companyName
          )}
        </h4>
        <p>
          Start Date:
          {isEditMode ? (
            <input
              type="text"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
            />
          ) : (
            startDate
          )}
        </p>
        <p>
          End Date:
          {isEditMode ? (
            <input
              type="text"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
            />
          ) : (
            endDate
          )}
        </p>
        <p>
          Description:
          {isEditMode ? (
            <textarea
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              cols={40}
            />
          ) : (
            description
          )}
        </p>
      </div>
    </div>
  );
};

export default Experience;
