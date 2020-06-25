const app = require ('express') ();
const axios = require ('axios').default;

app.set('view engine', 'ejs');

axios.get ('https://api.probot.io/top_credits', 
{
   method: 'GET',
   headers: {
      Authorization: 'Yt54h48trF1HpAY'
   }
}).then (response => {
  let toJSON = response.data.sort ((a, b) => b.credits - a.credits);
  
  app.get ('/', async (req, res) => {
    res.render ('index.ejs',
               {
      users: toJSON,
      num: 1
    })
  });
  app.get ('/users', async (req, res) => {
    res.json (toJSON);
  })

});
app.listen (9000, () => console.log ('Ready'))