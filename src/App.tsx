import React from 'react';
import Characters from './components/Pages/Characters';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import AppContext from './components/AppContext';
import NavBar from './components/NavBar';

function App() {
  // console.log(`  ..............▄█▓░░░░░░▓█▄
  // ............▄▀░░▐░░░░░░▌░▒▌
  // ...........▐░░░░▐░░░░░░▌░░░▌
  // ..........▐ ░░░░▐░░░░░░▌░░░▐
  // .........▐ ▒░░░ ▐░░░░░░▌░▒▒▐
  // .........▐ ▒░░░░▐░░░░░░▌░▒▐
  // ..........▀▄▒▒▒▒▐░░░░░░▌▄▀
  // ........... ▀▀▀ ▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐░░░░░░▌
  // ................▐▄▀▀▀▀▀▄▌
  // ...............▐▒▒▒▒▒▒▒▒▒▌
  // ...............▐▒▒▒▒▒▒▒▒▒▌
  // ................▐▒▒▒▒▒▒▒▌
  // .................▀▌▒▀▒▐▀

  // СОСАНИ ВИСЯЧОК
  // https://www.youtube.com/watch?v=q_7vRlLHoqY
  // `);

  return (
    <div>
      <AppContext>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Characters />}>
              <Route path="/detail:id" element={<Characters />}></Route>
            </Route>
          </Routes>
        </Router>
      </AppContext>
    </div>
  );
}

export default App;
