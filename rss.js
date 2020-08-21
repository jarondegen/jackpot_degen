

    var url = 'https://www.pokernews.com/rss.php';
    
    const newsDiv = document.querySelector(".main__news")

	feednami.load(url,function(result){
		if(result.error) {
			console.log(result.error);
		} else {
			var entries = result.feed.entries;
			for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                let entryLink = entry.link
                let newLink = document.createElement("a")
                newLink.setAttribute("href", entryLink)
                newLink.setAttribute("class", "main__news-links")
                newLink.innerHTML = entry.title
                console.log(newLink)
                let sum = entry.description;
                let newSum = `${sum.slice(0,5)} class="rss_pic" ${sum.slice(5)}`
                newsDiv.innerHTML += newSum;
                newsDiv.appendChild(newLink)
				console.dir(entry);
			}
		}
	});


