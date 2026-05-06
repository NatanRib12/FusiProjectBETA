<template>
  <div class="register-page">
      <section class="register-left">
        <div class="register-content">
          <p class="subtitle">
            Crie sua conta e acessa nossa plataforma
          </p>

          <form class="register-form">
            <div class="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Informe seu nome" />
            </div>

            <div class="input-group">
              <label>Email</label>
              <input type="email" placeholder="Informe seu email" />
            </div>

            <div class="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Informe sua senha" />
            </div>

            <button type="submit">Entrar</button>
          </form>

          <div class="login-link">
            <span>Já possui uma conta?</span>
            <router-link to="/">Entrar</router-link>
          </div>
        </div>
      </section>

      <section class="register-right">
        <h2>
          Melhor progresso<br />
          cardíaco começa<br />
          com RunFlow
        </h2>
      </section>
  </div>
</template>

<style scoped>
.register-page {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.register-left {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-content {
  width: 100%;
  max-width: 420px;
}

.subtitle {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 55px;
  color: #111;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group label {
  font-size: 1.7rem;
  color: #111;
}

.input-group input {
  height: 56px;
  border-radius: 18px;
  border: 1px solid #8d8d8d;
  padding: 0 22px;
  font-size: 1.15rem;
  background: transparent;
  outline: none;
}

.input-group input::placeholder {
  color: #767676;
}

button {
  margin-top: 18px;
  height: 58px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(to right, #1fa8f4, #0e4fd6);
  color: white;
  font-size: 1.45rem;
  cursor: pointer;
}

.login-link {
  margin-top: 70px;
  text-align: center;
  font-size: 1.35rem;
}

.login-link span {
  color: #6f6f6f;
}

.login-link a {
  color: #111;
  text-decoration: none;
  margin-left: 6px;
  font-weight: 500;
}

.register-right {
  height: 100vh;
  flex: 1;
  background: linear-gradient(to bottom, #19a8f8, #0a4fcd);
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  display: flex;
  align-items: flex-end;
  padding: 70px;
}

.register-right h2 {
  color: white;
  font-size: 3.3rem;
  font-weight: 400;
  line-height: 1.35;
}
</style>