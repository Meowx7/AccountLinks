// モーダルを開く
function openPasswordModal(event) {
  event.preventDefault(); // リンクのデフォルトの動作をキャンセル
  var modal = document.getElementById("password-modal");
  modal.style.display = "block";
  clearErrorMessage();
}

// モーダルを閉じる
function closePasswordModal() {
  var modal = document.getElementById("password-modal");
  modal.style.display = "none";
  clearErrorMessage();
}

// パスワードチェック
function checkPassword() {
  var password = document.getElementById("password-input").value;
  var errorMessage = document.getElementById("password-error");

  // パスワードのチェック
  if (password === "valorantgomi") {
    // 認証成功したら、指定のURLに遷移する
    window.location.href = "valorant.html";
  } else {
    showErrorMessage("あんたばかぁ？.");
  }
}

// エラーメッセージを表示
function showErrorMessage(message) {
  var errorMessage = document.getElementById("password-error");
  errorMessage.textContent = message;
}

// エラーメッセージをクリア
function clearErrorMessage() {
  var errorMessage = document.getElementById("password-error");
  errorMessage.textContent = "";
}
