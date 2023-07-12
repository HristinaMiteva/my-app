
export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Ticket</h1>
        <h1 className="title"> Shop</h1>
      </div>
      <div className="columns">
        <div className="column-half">
          <img className="image" src="https://i.pinimg.com/564x/e0/d5/b0/e0d5b0a9305ab2e706e8507c7f647355.jpg" alt="tictect" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
            You can buy tickets to every concert show this year, for every artist you'd like.
            For every day of the year, we work even on weekends! 
            You can call us on **********
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Some more info about aur location</h2>
          <p>
            We have offices everywhere in Europe, find us in almost every big city!
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="https://i.pinimg.com/564x/4e/dc/b4/4edcb460a940ff726549077935f57168.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title"></h2>
        <p>
         
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Shows you can find tickets from us, for this month </h2>
        <div className="gallery">
          <img className="gallery-image" src="https://i.pinimg.com/564x/a9/6b/24/a96b24c63cc73f23c4522fdb5c4050a8.jpg" alt="image01" />
          <img className="gallery-image" src="https://i.pinimg.com/564x/fd/09/0a/fd090aabb431bc328faa40e328dca102.jpg" alt="image01" />
          <img className="gallery-image" src="https://i.pinimg.com/564x/5e/ef/f0/5eeff09b8647aa1b54e9c0da8692dae2.jpg" alt="image01" />
          <img className="gallery-image" src="https://i.pinimg.com/564x/f9/a7/0c/f9a70c0ffe185da6a0fc861310897deb.jpg" alt="image01" />
          <img className="gallery-image" src="https://i.pinimg.com/564x/9d/a8/91/9da891138ab6e802070305994318bb82.jpg" alt="image01" />
          <img className="gallery-image" src="https://i.pinimg.com/564x/ad/6e/17/ad6e17cb06a31da1dd1e19a384d54723.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our best clients opinion</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="https://i.pinimg.com/736x/7e/0a/d0/7e0ad011f031c33a534daca3446c8b79.jpg" alt="avatar" />
            <h3 className="card-name">Lena</h3>
            <p>
             I'm so happy with the website and the help I received from the workers.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://i.pinimg.com/564x/89/43/79/894379b45db9f57febd232eafa87d340.jpg" alt="avatar" />
            <h3 className="card-name">Dea</h3>
            <p>
              I had so much fun on the concert, definetly will book again!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://i.pinimg.com/564x/8b/6f/b1/8b6fb1d6242be1be4b6465163a6087e8.jpg" alt="avatar" />
            <h3 className="card-name">Lora</h3>
            <p>
              Love the artists they work with!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://i.pinimg.com/736x/83/49/28/834928cd655b7a3f7ce2e7b671725aaa.jpg" alt="avatar" />
            <h3 className="card-name">Rebeka</h3>
            <p>
            Love it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
