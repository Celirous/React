import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getDatabase, ref, push, update, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // replaces this.props.match.params.id
  const title = id ? "Edit User" : "New User"; // replaces the if(this.id) logic

  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    // this function runs as soon as we render a new componet for edit or something. Whenever the value of something changes, this functions runs. IE any changes made to the ID, and we set the id in the const {id} which is any user data in this case.
    if (id) {
      const db = getDatabase();
      const dbRef = ref(db, "/" + id); // we concatonate the ID here so that it goes to the user we click on in the routing

      get(dbRef).then((snapshot) => {
        // we are retrieving the data in the DB of the user we are clicking on
        if (snapshot.exists()) {
          // if the data does exist:
          setInitialValues({
            username: snapshot.val().username, // it will grab the data and add it all to the object InitialValues in the const above.
            email: snapshot.val().email,
          }); // we grab this because we make it auto populate them on the form as we edit it.
        } // So if you go out of editing and click on a differrnt profile it will update the ID and grab all that data and then populate the form to edit the new "this" user.
      });
    }
  }, [id]);

  return (
    <div>
      <Formik
        enableReinitialize={true} // this means that the form will reinitialize when we click on a new person and the InitialValues update.
        initialValues={initialValues}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (values.email.length < 10) {
            errors.email = "Email address too short";
          }

          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length < 3) {
            errors.username = "username too short";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const db = getDatabase();

            if (id) {
              const dbRef = ref(db, "/" + id);
              update(dbRef, {
                username: values.username,
                email: values.email,
              }).then(() => {
                navigate("/");
                setSubmitting(false);
              });
            } else {
              const dbRef = ref(db, "/");
              push(dbRef, {
                username: values.username,
                email: values.email,
              }).then(() => {
                navigate("/");
                setSubmitting(false);
              });
            }
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="email" component="div" />
            </span>
            <Field type="text" name="username" placeholder="Username" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="username" component="div" />
            </span>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;

// ==========================================================================

// import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// class UserForm extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Any place in your app!</h1>
//                 <Formik
//                     initialValues={{ email: '', password: '' }}

//                     validate={values => {
//                         let errors = {};
//                         if (!values.email) {
//                             errors.email = 'Required';
//                         } else if (
//                             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                         ) {
//                             errors.email = 'Invalid email address';
//                         }
//                         else if (values.email.length < 10) {
//                             errors.email = 'Email address too short';
//                         }
//                         if (!values.password) {
//                             errors.password = 'Required';
//                         }
//                         else if (values.password.length < 8) {
//                             errors.password = 'Password too short';
//                         }
//                         return errors;
//                     }}

//                     onSubmit={(values, { setSubmitting }) => {
//                         setTimeout(() => {
//                             alert(JSON.stringify(values, null, 2));
//                             setSubmitting(false);
//                         }, 400);
//                     }}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form>
//                             <Field type="email" name="email" />
//                             <span style={{ color: "red", fontWeight: "bold" }}>
//                                 <ErrorMessage name="email" component="div" />
//                             </span>
//                             <Field type="password" name="password" />
//                             <span style={{ color: "red", fontWeight: "bold" }}>
//                                 <ErrorMessage name="password" component="div" />
//                             </span>

//                             <button type="submit" disabled={isSubmitting}>
//                                 Submit
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div >
//         )
//     }
// }
// export default UserForm;
