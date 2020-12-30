import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards'
import './index.css'

ReactDom.render( <>
<h1 className="headingStyle">TOP 5 NETFLIX SERIES</h1>

<Card imgsrc = "https://i.pinimg.com/originals/43/64/34/436434b5573a2294ae1c537e62a8dce2.jpg"
      title = "A Netflix Original Series."
      seriesName="DARK"/>
<Card imgsrc = "https://sa.kapamilya.com/absnews/abscbnnews/media/2019/news/01/07/20190108-shaymitchell-pennbadgley.jpg?ext=.jpg"
      title = "A Netflix Original Series."
      seriesName="PENN BADGLEY"/>
<Card imgsrc = "https://i.pinimg.com/originals/13/ce/63/13ce63119e9e7966586e1612b2ccecd6.jpg"
      title = "A Netflix Original Series."
      seriesName="THE 100"/>
<Card imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJlfnt9t4bXwGun11lT9TBh59m2UzHvHuxg&usqp=CAU"
      title = "A Netflix Original Series."
      seriesName="POWER"/>
<Card imgsrc = "https://cdn.wallpapersafari.com/44/87/KO8aJW.jpg"
      title = "A Netflix Original Series."
      seriesName="GAME OF THRONES"/>

 </>,
  document.getElementById('root')
);

