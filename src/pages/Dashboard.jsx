import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useEffect } from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-arrow");
    const backBtn = document.querySelector(".back-arrow");
    const root = document.querySelector(":root");

    let currentSlide = 1;
    const switchSlideDuration = 1000;
    root.style.setProperty("--duration", `${switchSlideDuration}ms`);

    const handleBack = () => {
      makeSlideChanges((currentSlide - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
      makeSlideChanges((currentSlide + 1) % slides.length);
    };

    const makeSlideChanges = (newSlide) => {
      slides[currentSlide].classList.replace("showcase", "right");
      slides[newSlide].classList.replace("left", "showcase");

      backBtn.removeEventListener("click", handleBack);
      nextBtn.removeEventListener("click", handleNext);

      setTimeout(
        (slide, backBtn, nextBtn) => {
          slide.classList.replace("right", "left");

          backBtn.addEventListener("click", handleBack);
          nextBtn.addEventListener("click", handleNext);
        },
        switchSlideDuration,
        slides[currentSlide],
        backBtn,
        nextBtn
      );

      currentSlide = newSlide;
    };

    backBtn.addEventListener("click", handleBack);
    nextBtn.addEventListener("click", handleNext);
  }, []);

  const openTab = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <div className="dashboard-container">

      <div className="suretips-section">
        <h2>SureTips</h2>
        <div className="carousel">
          
          <button className="arrow back-arrow">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWxlZnQiPjxwYXRoIGQ9Im0xNSAxOC02LTYgNi02Ii8+PC9zdmc+" />
          </button>
          <div className="slide showcase">
            
            <div className="overlay"></div>
            
            <div className="slide-info">
              
              <p>
                Ensure you have adequate health, life and property insurance to
                protect yourself and your family from unexpected financial
                burdens.
              </p>
              <button># Insurance</button>
            </div>
            <img
              className="slide-bg"
              src="https://via.placeholder.com/800x400"
              alt="Insurance"
            />
          </div>
          <div className="slide left">
            <div className="overlay"></div>
            <div className="slide-info">
              <p>
                Set aside a portion of your income regularly for emergency
                savings to handle unexpected expenses.
              </p>
              <button># Savings</button>
            </div>
            <img
              className="slide-bg"
              src="https://via.placeholder.com/800x400"
              alt="Savings"
            />
          </div>
          <button className="arrow next-arrow">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0Ij48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+" />
          </button>
        </div>
      </div>

      <div className="financial-status-section">
        <div className="fin-status">
          <h3>Financial status</h3>
          <div className="financial-status-content">
            <div className="financial-income">
              <LazyLoadImage
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1721438838/Expense_ppojel.png"
                alt="Wallet Logo"
                effect="blur"
              />
              <div className="horizontal-container">
                <div className="text-left">
                  <h2>$7,783.00</h2>
                  <p>Total Income</p>
                </div>
              </div>
            </div>
            <div className="financial-expenses">
              <LazyLoadImage
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1721438838/Income_wwmqxs.png"
                alt="Wallet Logo"
                effect="blur"
              />
              <div className="horizontal-container">
                <div className="text-left">
                  <h2>-$1,187.40</h2>
                  <p>Total Expenses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="financial-status-bar">
            <div className="progress-bar" style={{ width: "30%" }}></div>
          </div>
          <p>30% of your expenses, looks good.</p>
        </div>
        <div className="balance">
          <h3>Available Balance</h3>
          <h2>$20,833.00</h2>
          <button>Link New Account</button>
        </div>
      </div>
      <div className="savings-section">
        <div className="savings-content">
          <div className="grid-container">
            <div className="grid-item item1">
              <LazyLoadImage
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1721438807/Car_gtxici.svg"
                alt="Car Logo"
                effect="blur"
              />
              <h3>Savings On Goals</h3>
            </div>
            <div className="grid-item item2">
              <LazyLoadImage
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1721438807/Salary_cvymj0.svg"
                alt="Wallet Logo"
                effect="blur"
              />
              <div className="horizontal-container">
                <div className="text-left">
                  <p>SureTarget Wallet</p>
                  <strong>
                    <p>$4,000.00</p>
                  </strong>
                </div>
              </div>
            </div>
            <div className="grid-item item3">
              <LazyLoadImage
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1721438807/Salary_cvymj0.svg"
                alt="Target Logo"
                effect="blur"
              />
              <div className="horizontal-container">
                <div className="text-left">
                  <p>Target amount left</p>
                  <strong>
                    <p>$4,000.00</p>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="transactions-section">
        <h3>Latest Transactions</h3>
        <ul>
          <li>Salary - Monthly - $4,000.00</li>
          <li>Uber - Transport - $15.00</li>
          <li>Netflix - Entertainment - $12.99</li>
        </ul>
      </div>

      <div className="quick-analysis-section">
        <h3>Quick Analysis</h3>
        <div className="quick-analysis-tabs">
          <button
            className="tablinks active"
            onClick={(e) => openTab(e, "Today")}
          >
            Today
          </button>
          <button className="tablinks" onClick={(e) => openTab(e, "This Week")}>
            This Week
          </button>
          <button className="tablinks" onClick={(e) => openTab(e, "This Month")}>
            This Month
          </button>
          <button className="tablinks" onClick={(e) => openTab(e, "This Year")}>
            This Year
          </button>
        </div>
        <div id="Today" className="tabcontent">
          <div className="analysis-item">
            <p>Savings</p>
          </div>
          <div className="analysis-item">
            <p>House Rent</p>
          </div>
          {/* Add more analysis items as needed */}
        </div>
        <div id="This Week" className="tabcontent">
          <div className="analysis-item">
            <p>Savings</p>
          </div>
          <div className="analysis-item">
            <p>House Rent</p>
          </div>
          {/* Add more analysis items as needed */}
        </div>
        <div id="This Month" className="tabcontent">
          <div className="analysis-item">
            <p>Savings</p>
          </div>
          <div className="analysis-item">
            <p>House Rent</p>
          </div>
          {/* Add more analysis items as needed */}
        </div>
        <div id="This Year" className="tabcontent">
          <div className="analysis-item">
            <p>Savings</p>
          </div>
          <div className="analysis-item">
            <p>House Rent</p>
          </div>
          {/* Add more analysis items as needed */}
        </div>
        </div>
      <div className="income-expenses-section">
        <h3>Income & Expenses</h3>
        <div className="income-expenses-chart">
          {/* Add your chart component here */}
        </div>
      </div>
      <div className="set-budget-section">
        <p>Lorem Ipsum Food. Set Budget and Reach Your Financial Goals</p>
        <button>Set Budget</button>
      </div>
    </div>
  );
};

export default Dashboard;
