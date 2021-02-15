import React from "react";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  return (
    <div className="events" s4>
      <div className="eventsTitle" s4>
        <h4>Upcoming Events</h4>
      </div>

      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {" "}
              <img
                className="eventImg"
                src="https://www.dragoncon.org/wp-content/uploads/2020/09/Logo_no_backgroundSmall-300x258.png"
                alt="dragoncon"
              />
            </td>
            <td>DragonCon</td>
            <td>Sep 2-6 2021</td>
            <td>Atlanta, GA</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="eventImg"
                src="https://19qvmv3zk6hd3q6e0f17ikwm-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/mmc-logo-236x68.png"
                alt="Momocon"
              />
            </td>
            <td>MomoCon</td>
            <td>May 27-30 2021</td>
            <td>Atlanta, GA</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="eventImg"
                src="https://atlantacomiccon.com/wp-content/uploads/ACC18-DC-Char-pushpin2-OPT.png"
                alt="comicon"
              />
            </td>
            <td>Comicon</td>
            <td>Aug 6-8 2021</td>
            <td>Atlanta, GA</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="eventImg"
                src="https://wowchildrensmuseum.org/wp-content/uploads/2019/01/boardgames.jpg"
                alt="GameFest"
              />
            </td>
            <td>Game Fest 36</td>
            <td>Jun 3-6 2021</td>
            <td>Alpharetta, GA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingEvents;
