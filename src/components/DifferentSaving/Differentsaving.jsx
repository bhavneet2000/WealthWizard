import React from "react";

const DifferentSaving = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/1420649842/vector/abstract-growing-financial-graph-chart-background.jpg?s=612x612&w=0&k=20&c=DrnE-jfCYEOkPEMePE8VhNDwzYT-H_Gs8GVbRrwXx0w=")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "40px",
    color: "#ffffff",
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="text-3xl font-bold mb-8">
        3 Types Of Savings Accounts In India
      </h1>
      <p>
        Savings accounts can be safe places to keep the money you don’t intend
        to spend right away. These accounts are useful when planning for
        short-term needs, such as an emergency fund, and longer-term goals like
        stashing away cash for a down payment on a home. There are different
        types of savings accounts to choose from, and they’re not all alike. The
        options include traditional savings accounts, high-yield savings
        accounts, money market accounts, certificates of deposit, cash
        management accounts, and specialty savings accounts. What are the best
        types of savings accounts, and which types should you have? It depends
        on your needs and goals. Knowing how the various savings account options
        compare can make it easier to select the right place to keep your money.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Types of Savings Accounts
      </h2>
      <p>
        Distinguishing between different savings accounts means looking at their
        features, where you can open them, and what they’re designed to do. As
        you compare different savings accounts, it can help to ask these kinds
        of questions:
      </p>
      <ul className="list-disc pl-6">
        <li>Is this account designed for any specific purpose or goal?</li>
        <li>How much interest does this account earn?</li>
        <li>
          Are there minimum deposit requirements or minimum balance requirements
          to meet?
        </li>
        <li>Does the bank charge any fees for this type of savings account?</li>
        <li>
          Are there any tax benefits or advantages associated with this savings
          account?
        </li>
        <li>
          How accessible is the money in the account? Will I pay any penalties
          for withdrawing money from the account?
        </li>
      </ul>
      <p>
        Doing this kind of research can help you decide which types of savings
        accounts to have. From there, you can choose where to open them and how
        to fund them.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Traditional or Regular Savings Account
      </h2>
      <p>
        Good for: People who need to save money for the short or long term and
        aren’t as concerned about getting the best interest rate, expressed as
        the annual percentage yield (APY). Traditional savings accounts are what
        you may immediately think of when you consider where to save. These are
        the savings accounts you typically find at traditional banks. These
        types of savings accounts generally allow you to earn interest on your
        money, although they usually pay lower rates than other savings
        products. Many banks and credit unions allow you to open a regular
        savings account with a low minimum deposit. Traditional savings accounts
        typically allow you to make three to five monthly withdrawals (not
        including ATM withdrawals or in-person withdrawals at a branch) before
        incurring a small penalty. Banks may allow you to manage your account
        online, via mobile banking, by phone, or at a branch. Banks in India
        work under the supervision of the RBI and your deposits are insured for
        up to INR 5 lakh per depositor, per account ownership category, in the
        event of a bank failure. Know the interest rates of all Savings Bank
        Accounts in India.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Pros</h3>
      <ul className="list-disc pl-6">
        <li>
          It’s usually easy to open a regular savings account at a branch, and
          some banks allow you to do so online.
        </li>
        <li>You can earn interest on your savings to grow your money.</li>
        <li>
          You can visit a branch if you need help or want to deposit cash.
        </li>
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">Cons</h3>
      <ul className="list-disc pl-6">
        <li>
          The interest rates are usually low compared to other savings options.
        </li>
        <li>Monthly maintenance fees may cancel out interest earnings.</li>
        <li>Additional fees may apply for excess withdrawals.</li>
      </ul>
      {/* Add more sections as needed */}
    </div>
  );
};

export default DifferentSaving;
