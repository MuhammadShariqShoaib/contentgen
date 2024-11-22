const express = require('express');
const axios = require('axios'); 
const app = express();
const PORT = 5001;
const cors = require('cors');

app.use(express.json());
app.use(cors(
    {
        origin: ["https://contentgen-ih6d.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.get('/api/jokes', async (req, res) => {
    console.log("hello11");
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://official-joke-api.appspot.com/random_joke',
        headers: {}
    };
  
    try {
        const { data } = await axios.request(config);
        console.log(data);
        res.json(data); // Send the jokes data to the frontend
    } catch (error) {
        console.log("hello");
        res.status(500).json({ message: 'Error fetching jokes', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// app.get('/api/yt', async (req, res) => {
//     const options = {
//       method: 'GET',
//       url: 'http://api.tvmaze.com/search/shows?q=postman',
//     };
  
//     try {
//       const { data } = await axios.request(options);
//       const shows = data.map(item => item.show); // Extract only the "show" objects
//       res.json(shows); // Send simplified data to the frontend
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching data', error: error.message });
//     }
//   });
  

//   app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;
//     console.log("Received message:", userMessage);

//     try {
//         const response = await axios.post(
//             'https://api.openai.com/v1/chat/completions', 
//             {
//                 model: 'gpt-3.5-turbo', // Or another model of your choice
//                 messages: [{ role: 'user', content: userMessage }],
//                 max_tokens: 100,
//             },
//             {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use environment variable for the key
//                 },
//             }
//         );
//         console.log(response.data);
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Something went wrong');
//     }
// });


