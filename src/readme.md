1. I wrote a litte code then spent some time thinking about overall structure of my data and where I would keep track of which parts.  I spent a few hours trying to make it all work using mostly html validation because I had always used so much JS that I wanted to see what was possible only using html for validation. Unfortunately it wasn't up to the task so then I spent a few more hours putting it back together again using JS.
1. I have validation with styling and error messages unique to each field. With more time I could have included automatic addition of dashes to make credit card number entry easier. In real life I would also have included appropriate accessibility requirements.
1. It would look like a few lines of JSON. 
1. Maximizing visibility, making sure it's clear what fields aren't properly filled in, putting credit card first so you can validate ccv against it's type.
1. Don't forget to look at my tests. They're a little weird since they're pulling double duty, but they work. 