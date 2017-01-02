var express = require('express');
var router = express.Router();

var movies = [{
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Dawn of the Planet of the Apes",
  "image": "http://api.androidhive.info/json/movies/1.jpg",
  "rating": 8.3,
  "releaseYear": 2014,
  "genre": ["Action", "Drama", "Sci-Fi"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "District 9",
  "image": "http://api.androidhive.info/json/movies/2.jpg",
  "rating": 8,
  "releaseYear": 2009,
  "genre": ["Action", "Sci-Fi", "Thriller"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Transformers: Age of Extinction",
  "image": "http://api.androidhive.info/json/movies/3.jpg",
  "rating": 6.3,
  "releaseYear": 2014,
  "genre": ["Action", "Adventure", "Sci-Fi"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "X-Men: Days of Future Past",
  "image": "http://api.androidhive.info/json/movies/4.jpg",
  "rating": 8.4,
  "releaseYear": 2014,
  "genre": ["Action", "Sci-Fi", "Thriller"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "The Machinist",
  "image": "http://api.androidhive.info/json/movies/5.jpg",
  "rating": 7.8,
  "releaseYear": 2004,
  "genre": ["Drama", "Thriller"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "The Last Samurai",
  "image": "http://api.androidhive.info/json/movies/6.jpg",
  "rating": 7.7,
  "releaseYear": 2003,
  "genre": ["Action", "Drama", "History"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "The Amazing Spider-Man 2",
  "image": "http://api.androidhive.info/json/movies/7.jpg",
  "rating": 7.3,
  "releaseYear": 2014,
  "genre": ["Action", "Adventure", "Fantasy"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Tangled",
  "image": "http://api.androidhive.info/json/movies/8.jpg",
  "rating": 7.9,
  "releaseYear": 2010,
  "genre": ["Action", "Drama", "Sci-Fi"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Rush",
  "image": "http://api.androidhive.info/json/movies/9.jpg",
  "rating": 8.3,
  "releaseYear": 2013,
  "genre": ["Animation", "Comedy", "Family"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Drag Me to Hell",
  "image": "http://api.androidhive.info/json/movies/10.jpg",
  "rating": 6.7,
  "releaseYear": 2009,
  "genre": ["Horror", "Thriller"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Despicable Me 2",
  "image": "http://api.androidhive.info/json/movies/11.jpg",
  "rating": 7.6,
  "releaseYear": 2013,
  "genre": ["Animation", "Comedy", "Family"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Kill Bill: Vol. 1",
  "image": "http://api.androidhive.info/json/movies/12.jpg",
  "rating": 8.2,
  "releaseYear": 2003,
  "genre": ["Action", "Crime"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "A Bug's Life",
  "image": "http://api.androidhive.info/json/movies/13.jpg",
  "rating": 7.2,
  "releaseYear": 1998,
  "genre": ["Animation", "Adventure", "Comedy"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "Life of Brian",
  "image": "http://api.androidhive.info/json/movies/14.jpg",
  "rating": 8.9,
  "releaseYear": 1972,
  "genre": ["Comedy"]
}, {
  trailer: 'https://www.youtube.com/watch?v=3sHMCRaS3ao',
  "title": "How to Train Your Dragon",
  "image": "http://api.androidhive.info/json/movies/15.jpg",
  "rating": 8.2,
  "releaseYear": 2010,
  "genre": ["Animation", "Adventure", "Family"]
}];


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.get('/students', function (req, res, next) {
  res.render('students', {
    title: 'Express'
  });
});

/* GET movies page. */
router.get('/movies', function (req, res, next) {
  res.render('movies', {
    title: 'Hackeru Movies',
    PageName: 'Movies',
    arr: movies
  });
});

/* GET movies page. */
router.get('/redditsFromWeb', function (req, res) {
  var url = "https://www.reddit.com/.json";

  //import the http library
  var myHttp = require('https');

  var body = "";
  myHttp.get(url, function (apiResponse) {
    apiResponse.on('data', function (chunk) {
      body += chunk;
    })
    apiResponse.on('end', function () {
      console.log(body);
      var json = JSON.parse(body);
      res.render('reddits', 
      {
        title:"Reddits",
        arr: json.data.children
      });
    });
  });
});


/* GET movies page. */
router.get('/ituens', function (req, res) {
  var url = "https://itunes.apple.com/il/rss/topmovies/limit=25/genre=4401/json";

  //import the https library
  var myHttp = require('https');

  var body = "";
  myHttp.get(url, function (apiResponse) {
    apiResponse.on('data', function (chunk) {
      body += chunk;
    })
    apiResponse.on('end', function () {
      console.log(body);
      var json = JSON.parse(body);
      var ituensArr = [];
      for(var i = 0; i< json.feed.entry.length; i++){
          var item = json.feed.entry[i];
          var title = item.title.label;
          var link = item.link[0].attributes.href;
          var image = item['im:image'][0].label;
          ituensArr.push({title:title, link:link, image:image});
      }


      res.render('itunes', 
      {
        title:"Ituens",
        arr:ituensArr
      });
    });
  });
});



router.get('/addStudent', function (req, res) {
  var userName = req.query.userName;

  res.render('addStudent', {
    u: userName
  });
});



router.post('/addStudent', function (req, res) {
  var studentName = req.body.studentName;

  //Server side validation
  if (studentName.length <= 3) {
    res.render('error', {
      message: "noughty, noughty"
    });
  }

  res.render('addStudent', {
    u: studentName
  });
});
module.exports = router;




