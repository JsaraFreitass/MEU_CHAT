let nickname = "";

function login() {
  const email = document.getElementById("email").value;
  nickname = document.getElementById("nickname").value;

  if (!email || !nickname) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  document.getElementById("login").classList.add("hidden");
  document.getElementById("chat").classList.remove("hidden");

  // Mensagem de boas-vindas
  addMessage("Sistema", `Bem-vindo(a) ${nickname}! 🎉`);
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value;

  if (text.trim() === "") return;

  addMessage(nickname, text);
  input.value = "";
}

function addMessage(user, text) {
  const messages = document.getElementById("messages");
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<strong>${user}:</strong> ${text}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight; // rolar para baixo
}

/*<script>
        const messagesDiv = document.getElementById('messages');
        const chatForm = document.getElementById('chatForm');
        const userInput = document.getElementById('userInput');

        function addMessage(text, sender) {
            const msg = document.createElement('div');
            msg.className = 'message ' + sender;
            msg.textContent = text;
            messagesDiv.appendChild(msg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const text = userInput.value.trim();
            if (!text) return;
            addMessage(text, 'user');
            userInput.value = '';
            setTimeout(() => {
                addMessage('Esta é uma resposta automática do bot.', 'bot');
            }, 500);
        });
    </script>*/