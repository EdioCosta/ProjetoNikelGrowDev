// document.getElementById("link-conta"),
//   addEventListener("click", function () {
//     console.log("O usuário cliclou no link criar conta");
//   });

const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR SISTEMA
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;

  const account = getAccount(email);

  if (!account) {
    alert("Ooops, verifique o usuário ou a senha!!");
    return;
  }

  if (account) {
    if (account.password !== password) {
      alert("Ooops, verifique o usuário ou a senha!!");
      return;
    }

    saveSession(email, checkSession);

    window.location.href = "home.html";
  }
});

// criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); // EVENTO LOCAL, NAO CONTROLADO POR BACK END OU API EXTERNA
  const email = document.getElementById("email-create-input").value;
  const password = document.getElementById("password-create-input").value;

  if (email.length < 5) {
    alert("preencha o campo com um e-mail valido");
    return;
  }

  if (password.length < 5) {
    alert("senha precisa conter o minímo de 5 caracteres");
    return;
  }

  saveAccount({
    login: email,
    password: password,
    transactions: [],
  });

  myModal.hide();

  alert("Conta criada com suce$$o");
});

function checkLogged() {
  if (session) {
    sessionStorage.setItem("logged", session);
    logged = session;
  }
  if (logged) {
    saveSession(logged, session);

    window.location.href = "home.html";
  }
}

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
  if (saveSession) {
    localStorage.setItem("session", data);
  }

  sessionStorage.setItem("logged", data);
}

function getAccount(key) {
  const account = localStorage.getItem(key);

  if (account) {
    return JSON.parse(account); //DESFAZENDO EM UM OBJ. PARA SALVAR
  }

  return "";
}
