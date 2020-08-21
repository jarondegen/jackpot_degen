// window.addEventListener(DOMContentLoaded, (e) => {


    const feedUrl = `https://www.pokernews.com/rss.php`;

    // fetch(feedUrl, { mode: 'no-cors'}).then((res) => {
    //     console.log(res)
    //     res.text().then((xmlTxt) => {
    //       var domParser = new DOMParser()
    //       let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    //       console.log(xmlTxt)
    //       doc.querySelectorAll('item').forEach((item) => {
    //          let h1 = document.createElement('h1')
    //           h1.textContent = item.querySelector('title').textContent
    //            document.querySelector('output').appendChild(h1)
    //          })
    //        })
    //   })
    var url = 'https://www.pokernews.com/rss.php';
    
    const newsDiv = document.querySelector(".main__news")

	feednami.load(url,function(result){
		if(result.error) {
			console.log(result.error);
		} else {
			var entries = result.feed.entries;
			for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                let sum = entry.summary;
                let newSum = `${sum.slice(0,5)} class="rss_pic" ${sum.slice(5)}`
                newsDiv.innerHTML += newSum;
				// console.dir(entry);
			}
		}
	});
	



// })

