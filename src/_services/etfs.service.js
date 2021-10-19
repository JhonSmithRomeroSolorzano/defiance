export const etfsService = {
  getETFs
};

function getETFs (startDate, endDate) {
  return fetch(`${process.env.REACT_APP_API_URL}report?rt=campaign_report&account_id=''&start=${startDate}&end=${endDate}`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('id_token')
    }
  })
  .then(response => {
    return response.json()
  })
  .catch(error => console.warn(error));
}
