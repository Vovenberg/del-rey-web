import React  from 'react';
import { Link } from 'react-router-dom';
import styles from "../myapp.module.css"


class ContactsPage extends React.Component {
  render() {
    return <div>
      <div class="card w-25">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  }
}

export default ContactsPage