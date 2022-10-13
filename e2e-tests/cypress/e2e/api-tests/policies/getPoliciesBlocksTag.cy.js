context("Policies", () => {
    const authorization = Cypress.env("authorization");

    before(() => {
        cy.request({
            method: "POST",
            url: `${Cypress.env("api_server")}policies/import/message`,
            body: { messageId: "1650282926.728623821" },
            headers: {
                authorization,
            },
            timeout: 180000,
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });
    
    it("should sends data to the specified block.", () => {
        const urlPolicies = {
            method: "GET",
            url: Cypress.env("api_server") + "policies",
            headers: {
                authorization,
            },
        };

        cy.request(urlPolicies).should((response) => {
            expect(response.status).to.eq(200);
            // const policyId = response.body.at(-1).id;
            // const tag = response.body.at(-1).policyTag;

            // const url = {
            //     method: "GET",
            //     url:
            //         Cypress.env("api_server") +
            //         "policies/" +
            //         policyId +
            //         "/tag/" +
            //         tag + "/blocks",
            //     headers: {
            //         authorization,
            //     },
            // };
            // cy.request(url).should((response) => {
            //     expect(response.status).to.eq(200);
            // });
        });
    });
});
