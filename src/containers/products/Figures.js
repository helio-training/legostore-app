import {
  Drawer,
  FloatingActionButton,
  Paper,
  TextField,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';
import React, { Component } from 'react';

import Figure from './Figure';

const FIGURES = [
  {
    id: 1,
    name: 'Emmet',
    price: 9.99,
    description: `<p>“Good morning, city!”</p><p>Every day, Emmet goes to work exactly by the steps in the instructions booklet that he always keeps in his hand. As part of Bricksburg’s busy construction crew, he helps to rebuild the city as briefed by President Business.</p><p>Emmet wants to be popular, but he struggles to stand out in the crowd. Even his fellow construction workers hardly know he’s there. But all of that is about to change, thanks to a mysterious stranger and a legendary Prophecy about the most special minifigure in the entire world!</p>`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_constructionemmet.jpg?l.r2=-185741075',
    isActive: true,
  },
  {
    id: 2,
    name: 'Wild Style',
    price: 5.99,
    description: `“Act like you belong here.”

The streetwise and free-spirited Master Builder called Wyldstyle knows the best way to escape from Bad Cop and his robot goons. Blasting through a secret portal, she and Emmet travel to the Wild West, a rootin’, tootin’ realm of cattle-rustling, train-robbing, and high-noon showdowns.

Donning old-timey disguises to blend in with the local cowboys and outlaws, they start their quest to find the wizard Vitruvius and save the LEGO world. But although Wyldstyle knows exactly what she’s doing, poor Emmet may be completely out of his league!"`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_wildwestlucy.jpg?l.r2=-828264278',
    isActive: true,
  },

  {
    id: 3,
    name: 'President Business',
    price: 12.99,
    description: `“Let’s take extra care to follow the instructions, or you’ll be put to sleep.”

President Business is the president of the massive Octan Corporation… and the entire world. All he wants is for everybody to follow his instructions for how to build and act all the time. After all, an orderly Bricksburg is a happy Bricksburg.

But President Business is more than he appears. Although few suspect it, he is secretly Lord Business, an evil mastermind with a plan to glue the world together so it stays exactly the way he wants – forever! Can the prophesied Special stop his sinister scheme in time?`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_presidentbusiness.jpg?l.r2=59727247',
    isActive: true,
  },

  {
    id: 4,
    name: 'Gail, Construction Worker',
    price: 4.99,
    description: `“Wait, I’m confused. Who are we talking about?”

Each member of the Bricksburg construction crew has his or her own special way of standing out. Everybody knows Gail: she’s the perky one! No matter how hard the day’s work may be, you can always count on her to stay cheerful while she builds and sings along to the Everything is Awesome song.

But as perky as Gail is, even she has never really noticed Emmet among her fellow construction workers. As far as she knows, he’s just another smiling yellow face in the crowd. Maybe if he does something really important, then she’ll finally remember his name!`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_gail.jpg?l.r2=-469164462',
    isActive: true,
  },

  {
    id: 5,
    name: 'Abraham Lincoln',
    price: 12.99,
    description: `“Four score and twenty bricks ago…”

Nicknamed “Honest Abe” because he never borrows anybody’s bricks without giving them back, Abraham Lincoln lives in a log cabin that he built all by himself, in the middle of a forest that he built all by himself, then cut down, and then rebuilt all by himself again.

Abraham Lincoln is full of good and fair advice, so his fellow Master Builders often ask him to settle arguments over who gets to build what. He would probably make a great leader, but President Business’s Octan Corporation makes all of the voting machines!`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_abrahamlincoln.jpg?l.r2=-265194151',
    isActive: true,
  },
  {
    id: 6,
    name: 'Emmet',
    price: 9.99,
    description: `“Good morning, city!”

Every day, Emmet goes to work exactly by the steps in the instructions booklet that he always keeps in his hand. As part of Bricksburg’s busy construction crew, he helps to rebuild the city as briefed by President Business.

Emmet wants to be popular, but he struggles to stand out in the crowd. Even his fellow construction workers hardly know he’s there. But all of that is about to change, thanks to a mysterious stranger and a legendary Prophecy about the most special minifigure in the entire world!`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_constructionemmet.jpg?l.r2=-185741075',
    isActive: true,
  },
  {
    id: 7,
    name: 'Wild Style',
    price: 5.99,
    description: `“Act like you belong here.”

The streetwise and free-spirited Master Builder called Wyldstyle knows the best way to escape from Bad Cop and his robot goons. Blasting through a secret portal, she and Emmet travel to the Wild West, a rootin’, tootin’ realm of cattle-rustling, train-robbing, and high-noon showdowns.

Donning old-timey disguises to blend in with the local cowboys and outlaws, they start their quest to find the wizard Vitruvius and save the LEGO world. But although Wyldstyle knows exactly what she’s doing, poor Emmet may be completely out of his league!"`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_wildwestlucy.jpg?l.r2=-828264278',
    isActive: true,
  },

  {
    id: 8,
    name: 'President Business',
    price: 12.99,
    description: `“Let’s take extra care to follow the instructions, or you’ll be put to sleep.”

President Business is the president of the massive Octan Corporation… and the entire world. All he wants is for everybody to follow his instructions for how to build and act all the time. After all, an orderly Bricksburg is a happy Bricksburg.

But President Business is more than he appears. Although few suspect it, he is secretly Lord Business, an evil mastermind with a plan to glue the world together so it stays exactly the way he wants – forever! Can the prophesied Special stop his sinister scheme in time?`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_presidentbusiness.jpg?l.r2=59727247',
    isActive: true,
  },

  {
    id: 9,
    name: 'Gail, Construction Worker',
    price: 4.99,
    description: `“Wait, I’m confused. Who are we talking about?”

Each member of the Bricksburg construction crew has his or her own special way of standing out. Everybody knows Gail: she’s the perky one! No matter how hard the day’s work may be, you can always count on her to stay cheerful while she builds and sings along to the Everything is Awesome song.

But as perky as Gail is, even she has never really noticed Emmet among her fellow construction workers. As far as she knows, he’s just another smiling yellow face in the crowd. Maybe if he does something really important, then she’ll finally remember his name!`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_gail.jpg?l.r2=-469164462',
    isActive: true,
  },

  {
    id: 10,
    name: 'Abraham Lincoln',
    price: 12.99,
    description: `“Four score and twenty bricks ago…”

Nicknamed “Honest Abe” because he never borrows anybody’s bricks without giving them back, Abraham Lincoln lives in a log cabin that he built all by himself, in the middle of a forest that he built all by himself, then cut down, and then rebuilt all by himself again.

Abraham Lincoln is full of good and fair advice, so his fellow Master Builders often ask him to settle arguments over who gets to build what. He would probably make a great leader, but President Business’s Octan Corporation makes all of the voting machines!`,
    imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_abrahamlincoln.jpg?l.r2=-265194151',
    isActive: true,
  },
];

class Figures extends Component {

  state = {
    figures: FIGURES,
    query: '',
    showDetails: false,
  };

  renderFigure(figure) {
    const { showDetails } = this.state;

    return (
      <Figure figure={figure} key={figure.id} handleClick={e => this.setState({
        showDetails: !showDetails,
        selectedFigure: figure,
      }) } />
    );
  }

  renderDetails() {
    const { selectedFigure } = this.state;
    return selectedFigure ? (
      <section role="details">
        <h2>{selectedFigure.name}</h2>
        <section role="figure-details">
          <div><img src={selectedFigure.imageUrl} alt={selectedFigure.name} /></div>
          <div className="description" dangerouslySetInnerHTML={{ __html: selectedFigure.description }} />
        </section>
        <FloatingActionButton className="action">
          <ContentAdd />
        </FloatingActionButton>
        <div className="price">
          {selectedFigure.price}
        </div>

      </section>
    ) : null;
  }

  render() {
    const { query = '' } = this.state;
    const expression = new RegExp(query, 'i');
    const figures = this.state.figures.filter(f => f.name.match(expression) || f.price.toString().startsWith(query));

    return (
      <section role="figures">
        <Paper zDepth={1} role="query">
          <TextField type="search" value={this.state.query} onChange={e => this.setState({ query: e.target.value })} fullWidth={true} hintText="Filter by a name or a price..." />
        </Paper>
        <section role="search-results">
          { figures.map(figure => this.renderFigure(figure))}
        </section>
        <Drawer width={600} openSecondary={true} docked={false} open={this.state.showDetails} onRequestChange={(showDetails) => this.setState({
          showDetails,
          selectedFigure: null,
        })}>
          {this.renderDetails()}
        </Drawer>
      </section>
    );
  }
}


export default Figures;