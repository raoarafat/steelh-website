export default function AntiBriberyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-black pt-32">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Anti-Bribery and Anti-Corruption (ABAC) Policy & Compliance Program
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-black/70">
            Our commitment to ethical business practices and zero tolerance for bribery and corruption.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Part 1 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Part 1: Formal Anti-Bribery and Anti-Corruption Policy</h2>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">1. Purpose</h3>
                <div className="space-y-4 text-black/70">
                  <p>
                    The purpose of this Anti-Bribery and Anti-Corruption (ABAC) Policy is to set out our responsibilities, 
                    and the responsibilities of those working for us, in observing and upholding our zero-tolerance position 
                    on bribery and corruption. It also provides information and guidance to employees and external parties 
                    on how to recognize and deal with bribery and corruption issues.
                  </p>
                  <p>
                    This policy is developed in accordance with the Malaysian Anti-Corruption Commission (MACC) Act 2009 
                    and is also aligned with international best practices, including the UK Bribery Act 2010 and the U.S. 
                    Foreign Corrupt Practices Act (FCPA). It is intended to supplement, not replace, any existing legal obligations.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">2. Scope</h3>
                <div className="space-y-4 text-black/70">
                  <p>This policy applies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All employees, directors, officers, and temporary workers, regardless of location or function.</li>
                    <li>Subsidiaries, joint ventures, and controlled affiliates.</li>
                    <li>External parties including agents, consultants, contractors, suppliers, vendors, business partners, and any third parties representing or acting on behalf of the company.</li>
                  </ul>
                  <p>
                    It also covers interactions with public officials, private companies, non-governmental organizations (NGOs), 
                    and charitable entities.
                  </p>
                  <p>
                    This policy shall also extend to the evaluation and monitoring of all subcontractors. All subcontractors 
                    must undergo a corruption risk assessment and demonstrate a commitment to anti-bribery standards that align 
                    with this policy.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">3. Policy Statement</h3>
                <div className="space-y-4 text-black/70">
                  <div>
                    <p className="font-semibold mb-2">We strictly prohibit:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Offering, giving, soliciting, or receiving any bribe or improper payment, whether in cash or any other form of benefit.</li>
                      <li>Engaging in any corrupt act to gain a commercial, contractual, regulatory, or personal advantage.</li>
                      <li>Making facilitation payments, regardless of local customs or practices.</li>
                      <li>Concealing bribes or corrupt practices through falsified records, shell companies, or unrecorded transactions.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Employees are expected to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Perform their duties with honesty and integrity.</li>
                      <li>Avoid situations where their personal interests conflict with those of the company.</li>
                      <li>Exercise due diligence in identifying red flags of corruption in business dealings.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">4. Definitions</h3>
                <div className="space-y-3 text-black/70">
                  <div><strong>Bribery:</strong> Offering, promising, giving, accepting, or soliciting an advantage as an inducement for action which is illegal, unethical, or a breach of trust.</div>
                  <div><strong>Corruption:</strong> Abuse of power or position for private gain.</div>
                  <div><strong>Facilitation Payment:</strong> A small, unofficial payment made to a public official to secure or expedite a routine governmental action.</div>
                  <div><strong>Kickback:</strong> The return of a portion of money received in a business transaction, typically as a reward for awarding a contract.</div>
                  <div><strong>Public Official:</strong> Any person holding a legislative, administrative, or judicial position of any kind, whether appointed or elected.</div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">5. Gifts, Hospitality, and Donations</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Acceptable gifts must be nominal in value (RM250 or less), infrequent, and not intended to influence decision-making.</li>
                  <li>All gifts or hospitality exceeding RM250 must be declared and approved by the Compliance Officer.</li>
                  <li>Records of all gifts and entertainment must be kept in the Gift & Entertainment Register.</li>
                  <li>Charitable contributions must be transparent, documented, and approved by a designated officer.</li>
                  <li>Sponsorships must be approved by senior management and evaluated for potential conflicts of interest.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">6. Third-Party Engagements</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Risk assessments must be performed prior to engaging any third-party representative.</li>
                  <li>Third parties must sign an Anti-Corruption Declaration and Code of Conduct.</li>
                  <li>Contracts must include audit and termination clauses for breach of ABAC obligations.</li>
                  <li>Third parties are subject to regular performance reviews and audits.</li>
                  <li>Subcontractors, in particular, must undergo a due diligence review that includes an evaluation of their anti-bribery and anti-corruption policies.</li>
                  <li>The company reserves the right to terminate agreements with subcontractors who fail to maintain adequate ABAC standards or cooperate in compliance audits.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">7. Record-Keeping</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Financial records must detail all transactions accurately and with supporting documentation.</li>
                  <li>All contracts, invoices, receipts, and payments must be properly filed and retained in accordance with internal policies and regulatory requirements.</li>
                  <li>The company shall implement systems to detect unusual payments or patterns that may indicate bribery.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">8. Reporting Mechanism and Whistleblower Protection</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Whistleblower hotline and email (arafat@steelhs.com) are managed independently and offer confidential reporting options.</li>
                  <li>Retaliation against whistleblowers is strictly prohibited.</li>
                  <li>All reports are logged, acknowledged, investigated, and resolved promptly, with outcomes documented.</li>
                  <li>Training is provided to ensure all employees understand how and when to report.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">9. Non-Compliance and Disciplinary Action</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Any breach of this policy will be treated as a serious offense and may result in disciplinary action, including dismissal.</li>
                  <li>Non-compliance involving criminal behavior will be reported to appropriate law enforcement authorities.</li>
                  <li>The company will cooperate fully with regulatory bodies and conduct internal investigations in parallel.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Part 2: Anti-Bribery and Anti-Corruption Compliance Program</h2>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">1. Governance and Oversight</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>The Board of Directors holds ultimate oversight responsibility for the ABAC framework.</li>
                  <li>The Compliance Officer, Arafat Khan, is responsible for policy implementation, training, risk assessments, and internal investigations. He can be contacted at +60122219647 or arafat@steelhs.com.</li>
                  <li>Management must lead by example, reinforcing ethical behavior across the organization.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">2. Risk Assessment</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Risk assessments are conducted annually and during major changes (e.g., entering new markets, acquisitions).</li>
                  <li>Factors considered include industry sector, transaction value, interaction with public officials, and geographic corruption indexes.</li>
                  <li>Each department is assessed for exposure and mitigation plans are developed accordingly.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">3. Due Diligence and Third-Party Management</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>A formal third-party due diligence process is mandatory before onboarding.</li>
                  <li>Red flags such as lack of transparency, refusal to provide references, or excessive commission demands must be escalated.</li>
                  <li>The company maintains a centralized Third-Party Risk Register to track high-risk entities.</li>
                  <li>Subcontractors are required to submit documentation of their internal anti-bribery controls, which shall be reviewed and approved prior to engagement.</li>
                  <li>Subcontractor reviews include checks on: (a) existence of ABAC policy, (b) documented internal procedures, (c) past compliance breaches, and (d) willingness to accept contract terms aligning with our ABAC policy.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">4. Training and Communication</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Annual e-learning and in-person training for all employees.</li>
                  <li>Role-specific training (e.g., procurement officers, sales teams) includes case studies and quizzes.</li>
                  <li>Awareness campaigns using internal newsletters, posters, and ethical culture workshops.</li>
                  <li>All third parties must acknowledge receipt and understanding of the ABAC Policy.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">5. Policies and Procedures</h3>
                <div className="space-y-4 text-black/70">
                  <p>Written SOPs for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Review and approval of gifts, entertainment, donations.</li>
                    <li>Vendor selection and onboarding.</li>
                    <li>Due diligence and contracting.</li>
                    <li>Handling and escalation of whistleblower reports.</li>
                  </ul>
                  <p>All policies are stored in the internal knowledge base and reviewed annually.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">6. Monitoring and Auditing</h3>
                <div className="space-y-4 text-black/70">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Internal audits of departments with higher corruption risk (e.g., finance, procurement, sales) conducted twice per year.</li>
                    <li>Spot audits and forensic reviews conducted for flagged transactions.</li>
                    <li>Metrics used to monitor policy effectiveness:</li>
                  </ul>
                  <div className="ml-8">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Training Completion Rate: % of staff completing annual ABAC training.</li>
                      <li>Whistleblower Activity: Number of reports submitted, % investigated, average resolution time.</li>
                      <li>Third-Party Reviews: % of active third parties with completed due diligence, % reviewed annually.</li>
                      <li>Policy Violations: Number and type of breaches, disciplinary actions taken.</li>
                      <li>Audit Results: % of audits with no findings, recurring issues, and mitigation effectiveness.</li>
                      <li>Subcontractor Compliance: % of subcontractors with approved ABAC documentation, % passing annual compliance audits, % requiring corrective actions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">7. Reporting and Investigation Procedures</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Whistleblower reports are logged and assigned a case number.</li>
                  <li>A Whistleblower Review Committee (WRC) comprising Compliance, Legal, and HR reviews all reports.</li>
                  <li>Investigations include document reviews, interviews, and forensic analysis where necessary.</li>
                  <li>Investigation reports include findings, responsible individuals, and corrective actions.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="bg-white p-8 border border-black/10">
                <h3 className="text-xl font-bold mb-4">8. Continuous Improvement</h3>
                <ul className="list-disc list-inside space-y-2 text-black/70 ml-4">
                  <li>Annual external review or audit of the ABAC program.</li>
                  <li>Feedback collected from training sessions, employee surveys, and audit results.</li>
                  <li>Benchmarking against industry standards and peer companies.</li>
                  <li>Continuous learning and system upgrades to ensure the policy remains effective and relevant.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-black text-white p-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p><strong>Compliance Officer:</strong> Arafat Khan</p>
              <p><strong>Phone:</strong> +60122219647</p>
              <p><strong>Email:</strong> arafat@steelhs.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
