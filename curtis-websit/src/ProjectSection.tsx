import React from "react";

function ProjectSection() {
  return (
    <div className="p-4 bg-pink-300">
      <h1 className="bg-purple-300">ProjectSection</h1>

      <div className="flex flex-col gap-4 bg-red-300 sm:flex-row">
        {/* Project 1: Basketball website */}
        <div className="bg-blue-300">
          <a href="www.skillify.ca">
            <h1 className="p-4 bg-orange-300">Basketball Website</h1>
          </a>
          <p>
            This is a website I created for a basketball team. It includes a
            homepage, a roster page, and a schedule page. The homepage includes
            the team's logo and a brief description of the team. The roster page
            includes the names and pictures of the players on the team. The
            schedule page includes the team's upcoming games and the scores of
            past games.
          </p>
        </div>
        {/* Project 2: Frogger Game */}
        <div className="bg-blue-300">
          <h1>Frogger Game</h1>
          <p>
            This is a game I created that is similar to the classic arcade game
            Frogger. The player controls a frog that must cross a busy road and
            a river to reach the other side of the screen. The player must avoid
            cars and logs that move across the screen. The player earns points
            for successfully crossing the road and river, and loses a life if
            the frog is hit by a car or falls in the river.
          </p>
        </div>
        {/* Project 3: Memory Game */}
        <div className="bg-blue-300">
          <h1>Memory Game</h1>
          <p>
            This is a game I created that tests the player's memory. The game
            displays a grid of cards face down. The player must flip over two
            cards at a time to find matching pairs. If the cards do not match,
            they are flipped back over. The player must remember the location of
            the cards to find all the matching pairs and win the game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
