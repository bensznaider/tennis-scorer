interface RestartAlertProps {
  setRefreshQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const RestartAlert: React.FC<RestartAlertProps> = ({setRefreshQuestion}) => {
  const handleOkRefreshButton = () => {
    window.location.reload();
  }

  const handleCancelButton = () => {
    setRefreshQuestion(false)
  }


  return (
    <div className={"restart-alert-message"}>
      If you refresh the site, you will lose all the match data.
      <div style={{display:"flex", justifyContent:"space-around", marginTop:"1rem"}}>
      <button className="not-selected-option" onClick={handleOkRefreshButton}>Go ahead</button>
      <button className="continue-button" onClick={handleCancelButton}>Cancel</button>
    </div>
    </div>
  );
};

export default RestartAlert;
