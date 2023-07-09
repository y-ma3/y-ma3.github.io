document.addEventListener("DOMContentLoaded", function () {

    // プライバシーポリシー部分
    var policyTitle = document.querySelector(".policy-title");
    var policyContent = document.querySelector(".policy-content");
  
    policyTitle.addEventListener("click", function () {
      policyTitle.classList.toggle("open");
      policyContent.classList.toggle("hidden");

      if (!policyContent.classList.contains("hidden")) {
        policyContent.style.maxHeight = policyContent.scrollHeight + "px";
      } else {
        policyContent.style.maxHeight = 0;
      }
    });

    // ホバーしている間nav-itemが大きくなる
    const items = document.querySelectorAll(".nav-item");

    items.forEach((item) => {
      item.addEventListener("mouseover", function () {
        item.classList.add("bounce");
      });
  
      item.addEventListener("mouseout", function () {
        item.classList.remove("bounce");
      });
    });

    // ナビアイテムクリックでスクロール
    var navItems = document.querySelectorAll(".nav-item a");

    navItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });

    // ページトップに戻るボタン
    var pageTopButton = document.getElementById("js-pagetop");
    var isButtonVisible = false;

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 200 && !isButtonVisible) {
        fadeIn(pageTopButton);
        isButtonVisible = true;
      } else if (window.pageYOffset <= 200 && isButtonVisible) {
        fadeOut(pageTopButton);
        isButtonVisible = false;
      }
    });

    function fadeIn(element) {
      element.style.display = "block";
      element.style.opacity = "0";

      var op = 0;
      var timer = setInterval(function() {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op.toString();
        op += 0.05;
      }, 20);
    }

    function fadeOut(element) {
      var op = 1;
      var timer = setInterval(function() {
        if (op <= 0) {
          clearInterval(timer);
          element.style.display = "none";
        }
        element.style.opacity = op.toString();
        op -= 0.05;
      }, 20);
    }

    pageTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  