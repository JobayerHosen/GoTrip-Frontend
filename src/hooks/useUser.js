const useUser = () => {
  const addUser = async (user) => {
    let status;
    fetch("https://phwc-as11-server-jobayer.herokuapp.com/users/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        status = data;
      })
      .catch((err) => console.log(err));

    return status;
  };

  const updateUser = (uid, data) => {
    let status;
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/users/${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        status = data;
      });

    return status;
  };

  return {
    addUser,
    updateUser,
  };
};

export default useUser;
