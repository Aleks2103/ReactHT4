import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from '../images/logo2.png'

import FloatingActionButtons from "../AddContact/BtnAddUser";
import { borderRadius } from "@mui/system";


const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" style={{margin: 'auto'}}>
          <FloatingActionButtons />
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover" style={{wight: '100vh'}}>
            <thead className="table-header bg-dark text-white">
              <tr>
                <th><img src={Logo} style={{wight: '26px', height: '26px', borderRadius: "50%"}}></img></th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <th><img src={Logo} style={{wight: '26px', height: '26px'}}></img></th>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
