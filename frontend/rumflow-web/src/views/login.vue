<template>
  <div class="login-page">
      <section class="login-left">
        <div class="login-content">
          <h1>Bem vindo</h1>
          <p>Acesse a plataforma com seu email e senha</p>

          <form class="login-form" @submit.prevent="enviarLogin">
            <div class="input-group">
              <label>Email</label>
              <input v-model="email" type="email" placeholder="Informe seu email" />
            </div>

            <div class="input-group">
              <label>Senha</label>
              <input v-model="password" type="password" placeholder="Informe sua senha" />
            </div>

            <button type="submit">Entrar</button>
          </form>

          <div class="register-link">
            <span>Não possui conta?</span>
              <router-link to="/register">Registrar</router-link>
              <p v-if="errorMessage" class="error-message">
                  {{ errorMessage }}
              </p>
          </div>
        </div>
      </section>

      <section class="login-right">
        <h2>
          Melhor progresso<br />
          cardíaco começa<br />
          com RunFlow
        </h2>
      </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function enviarLogin() {
  errorMessage.value = ''

 // uma requisição POST com um objeto JSON com email e senha
 try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await response.json()

    // se responde estiver ok, então o id do atleta é armazena no localStorege e a página passa para calculate
    if (response.ok) {
      localStorage.setItem('athleteId', data.athleteId)
      router.push('/calculate')
    } else {
      errorMessage.value = data.message
    }
  } catch (error) {
    errorMessage.value = 'Erro ao conectar com o servidor'
  }
}
</script>


<style scoped>
.login-page{
    height: 100vh;
    width: 100vw;
    background: #ffffff;
    display: flex;
}

.login-left {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  width: 100%;
  max-width: 420px;
}

.login-content h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 18px;
  color: #111;
}

.login-content p {
  text-align: center;
  font-size: 1.45rem;
  margin-bottom: 60px;
  color: #111;
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-group label {
  font-size: 1.8rem;
  color: #111;
}

.input-group input {
  height: 58px;
  border-radius: 18px;
  border: 1px solid #8d8d8d;
  padding: 0 22px;
  font-size: 1.2rem;
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
  font-size: 1.5rem;
  cursor: pointer;
}

.register-link {
  margin-top: 90px;
  text-align: center;
  font-size: 1.4rem;
}

.register-link span {
  color: #6f6f6f;
}

.register-link a {
  color: #111;
  text-decoration: none;
  margin-left: 6px;
  font-weight: 500;
}

.login-right {
  flex: 1;
  background: linear-gradient(to bottom, #19a8f8, #0a4fcd);
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  display: flex;
  align-items: flex-end;
  padding: 70px;
}

.login-right h2 {
  color: white;
  font-size: 3.3rem;
  font-weight: 400;
  line-height: 1.35;
}

</style>