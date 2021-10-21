export const campaignsService = {
  getCampaignControlChart
};

function getCampaignControlChart () {
  return fetch(`${process.env.REACT_APP_API_URL}report?rt=etfControlChart&symbol=SPAK`,{
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
