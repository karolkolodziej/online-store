import React from "react";

export const Card = () => {
  return (
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/matthew.png"></img>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">Joined in 2013</span>
            <span>
              <i class="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
