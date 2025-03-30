export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-purple-700 mb-8 text-center">
                        Terms of Service - GetItDone
                    </h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">ACCEPTANCE OF TERMS</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Welcome to GetItDone, a freelancing marketplace that connects clients with freelancers while ensuring anonymity and transparency. By using our platform, you agree to these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. ACCOUNT REGISTRATION & USAGE</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Users, including both Clients and Freelancers, must provide accurate and truthful information during registration. While anonymity is maintained, sharing personal contact details such as phone numbers, emails, or social media handles is strictly prohibited. Any violation of this rule may result in account suspension or permanent ban from the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. FREELANCER SELECTION & TASK MANAGEMENT</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Clients can hire freelancers based on their skills, ratings, and past work. Freelancers are expected to complete tasks within the agreed deadlines. Clients have the option to request revisions before approving the final submission. The admin panel actively manages disputes to ensure fair and transparent resolutions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. PAYMENT & ESCROW SYSTEM</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Clients deposit payments into an escrow system, which are released to freelancers upon task approval. Once a task is approved by the client, refunds will not be issued. In case of disputes, our admin team will review the case and make a final, binding decision.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. REVIEWS & RATINGS</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Clients can leave anonymous reviews and ratings. Any attempt to manipulate or influence ratings will lead to account suspension.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. PROHIBITED ACTIVITIES</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Sharing personal contact information is strictly prohibited. Direct payments outside GetItDone are not allowed. Any form of hate speech, harassment, or unethical conduct will result in permanent account removal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. ACCOUNT TERMINATION</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                We reserve the right to suspend or terminate accounts for policy violations. Users may request account deletion through the admin panel.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. LIMITATION OF LIABILITY</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                GetItDone is not liable for project quality beyond our dispute resolution process. We do not guarantee freelancer earnings or project completion for clients.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. CHANGES TO TERMS</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                We may update these terms at any time. Continued use of GetItDone implies acceptance of the latest version. Need help? Contact our support team anytime.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
