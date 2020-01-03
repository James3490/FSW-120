import React from 'react';
import BookCard from "./BookCard";

function App() {
  return (
    <div className="book">            
            <BookCard 
                book={{title: "Frankenstein", subtitle: "The Modern Prometheus", author: "Mary Shelley", description: "Frankenstein, an instant bestseller and an important ancestor of both the horror and science fiction genres, not only tells a terrifying story, but also raises profound, disturbing questions about the very nature of life and the place of humankind within the cosmos: What does it mean to be human? What responsibilities do we have to each other? How far can we go in tampering with Nature? In our age, filled with news of organ donation genetic engineering, and bio-terrorism, these questions are more relevant than ever." }}
            />
            
            <BookCard 
                book={{title: "A Christmas Carol", subtitle: "A Ghost Story of Christmas", author: "Charles Dickens", description: "To bitter, miserly Ebenezer Scrooge, Christmas is just another day. But all that changes when the ghost of his long-dead business partner appears, warning Scrooge to change his ways before it's too late."}}
            />
            
            <BookCard
                book={{title: "Peter Pan", subtitle: "The Boy Who Wouldn’t Grow Up", author: "J.M. Barrie", description: "Peter Pan by J. M. Barrie Peter pan, the mischievous boy who refuses to grow up, lands in the Darling's proper middle-class home to look for his shadow. He befriends Wendy, John and Michael and teaches them to fly (with a little help from fairy dust). He and Tinker Bell whisk them off to Never-land where they encounter the Red Indians, the Little Lost Boys, pirates and the dastardly Captain Hook."}}
            />
            
            <BookCard 
                book={{title: "Twelfth Night", subtitle: "What You Will", author: "William Shakespeare", description: "Named for the twelfth night after Christmas, the end of the Christmas season, Twelfth Night plays with love and power. The Countess Olivia, a woman with her own household, attracts Duke (or Count) Orsino. Two other would-be suitors are her pretentious steward, Malvolio, and Sir Andrew Aguecheek. Onto this scene arrive the twins Viola and Sebastian; caught in a shipwreck, each thinks the other has drowned. Viola disguises herself as a male page and enters Orsino’s service. Orsino sends her as his envoy to Olivia—only to have Olivia fall in love with the messenger. The play complicates, then wonderfully untangles, these relationships."}}
            />

            <BookCard 
                book={{title: "Oliver Twist", subtitle: "The Parish Boy's Progress", author: "Charles Dickens", description: "The story of Oliver Twist - orphaned, and set upon by evil and adversity from his first breath - shocked readers when it was published. After running away from the workhouse and pompous beadle Mr Bumble, Oliver finds himself lured into a den of thieves peopled by vivid and memorable characters - the Artful Dodger, vicious burglar Bill Sikes, his dog Bull's Eye, and prostitute Nancy, all watched over by cunning master-thief Fagin. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery."}}
            />
            <BookCard 
                book={{title: "Henry VIII", subtitle: "All Is True", author: "William Shakespeare", description: "Henry VIII is a history play generally believed to be a collaboration between William Shakespeare and John Fletcher, based on the life of Henry VIII of England."}}
            />
            
            <BookCard 
                book={{title: "Queen of Scots", subtitle: "The True Life of Mary Stuart", author: "John Guy", description: "A long-overdue and dramatic reinterpretation of the life of Mary, Queen of Scots by one of the leading historians at work today."}}
            />
            
            <BookCard
                book={{title: "Anastasia", subtitle: "The Last Grand Duchess, Russia, 1914", author: "Carolyn Meyer", description: "Award-winning author Carolyn Meyer introduces readers to the unforgettable Anastasia Romanov whose idyllic life is forever changed with the coming of World War I."}}
            />
            
            <BookCard 
                book={{title: "Nine Days a Queen", subtitle: "The Short Life and Reign of Lady Jane Grey", author: "Ann Rinaldi", description: "Here is a breathtaking story of English royalty with its pageantry, privilege, and surprising cruelty. As she did in her previous novel Mutiny's Daughter, Ms. Rinaldi uses powerful, evocative writing to bring to life a teenage girl caught in the grip of stirring times. "}}
            />

            <BookCard 
                book={{title: "The Vampire Book", subtitle: "The Encyclopedia of the Undead", author: "J. Gordon Melton", description: "The Vampire Book is meticulously researched and well organized. Included are an article on the cultural history of the vampire; a historical timeline; addresses of vampire societies all over the world; a 55-page filmography; vampires in plays, opera, and ballet; a 13-page list of vampire novels; and an extensive index."}}
            />

            </div>
  );
}

export default App;
