const { getTable } = require('../db/getTable');

module.exports = {
  postPatientBillingUpdate: (req, res) => {
    const health_card_no = req.params.health_card_no;
    const creditcard_no = req.body.creditcard_no;
    const billing_id = req.body.billing_id;
    const cvc = req.body.cvc;
    const card_expiry = req.body.card_expiry;
    const query = "UPDATE `billing` SET `creditcard_no` = '" + creditcard_no + "', `cvc` = '" + cvc + "', `card_expiry` = '" + card_expiry + "'  WHERE `billing`.`health_card_no` = '" + health_card_no + "' AND `billing`.`billing_id` = '" + billing_id + "'" ;
    getTable(query)
      .then(data => res.json(data));
  },
};
