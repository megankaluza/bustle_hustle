import Ember from 'ember';

var articles = [{
  id: 1,
  title: "Bill be drinkin' again!",
  author: "Miley Cyrus",
  date: "10/25/2016",
  image: "http://static.thesuperficial.com/uploads/2015/08/06102355/bill-clinton-drinking.jpg"
}, {
  id: 2,
  title: "Miley be Cray Cray",
  author: "Bill Clinton",
  date: "08/20/2016",
  image: "http://i.dailymail.co.uk/i/pix/2014/02/01/article-0-1B1D86A400000578-142_634x628.jpg"
}, {
  id: 3,
  title: "Mel Gibson loses his mind on LSD 'again'..",
  author: "Edward Sharpe",
  date: "07/12/2016",
  image: "http://www.freakingnews.com/pictures/83500/Mel-Gibson-as-a-Woman-with-an-Iron--83717.jpg"
}];

export default Ember.Route.extend({
  model() {
    return articles;
  },
});
