import './Publications.css';

function Publications() {
  return (
    <div className="publications">
      <h1>Publications</h1>
      <p className="venue-note">
        *CHI, IMWUT, and ASSETS are the premier publication venues in Human-Computer Interaction
      </p>

      <section className="conference-papers">
        <h2>CONFERENCE PAPERS [PEER-REVIEWED]</h2>
        <div className="publication-item">
          <p>
            [CHI'25] Tamanna Motahar, Yeonjae Kim, Eden Fisher, Jason Wiese. "Understanding the Training Experiences of Competitive Skiers with Tetraplegia." In Proceedings of the ACM Conference on CHI Conference on Human Factors in Computing Systems (CHI), 23 Pages (Revise and resubmit)
          </p>
        </div>

        <div className="publication-item">
          <p>
            [ASSETS'24] Tamanna Motahar, Sara Nurollahian, Yeonjae Kim, Marina Kogan, and Jason Wiese. "Exploring how People with Spinal Cord Injuries Seek Support on Social Media." In The 26th International ACM SIGACCESS Conference on Computers and Accessibility, pp. 1-17. 2024. (Acceptance Rate 29%)
          </p>
        </div>
      </section>

      <section className="journal-papers">
        <h2>JOURNAL PAPERS [PEER-REVIEWED]</h2>
        <div className="publication-item">
          <p>
            [IMWUT'25] Tamanna Motahar, Brandon Rivera-Melo, Ross Imburgia, Yeonjae Kim, James Gardner, Jeffrey Rosenbluth, Jason Wiese. "Design and Evaluation of a Power Wheelchair-Based Self-tracking System to Prevent Pressure Ulcers." 25 pages (Accepted)
          </p>
        </div>
      </section>
    </div>
  );
}

export default Publications; 