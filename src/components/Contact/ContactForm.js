import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div class="container w-100 border py-3 contact-form-container">
                <div class="row">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-12 mb-2">
                                        <div class="form-group">
                                            <label for="form_name">FirstName</label>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter Your First Name" required="required" data-error="Firstname is required." />

                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="form-group">
                                            <label for="form_lastname">LastName</label>
                                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Enter Your Last Name" required="required" data-error="Lastname is required." />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-2">
                                        <div class="form-group">
                                            <label for="form_email">Email Address</label>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />

                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="form-group">
                                            <label for="form_need">Please Specify Your Need </label>
                                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option >Request Invoice for order</option>
                                                <option >Request order status</option>
                                                <option >Haven't received cashback yet</option>
                                                <option >Other</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <div class="form-group">
                                            <label for="form_message">Message *</label>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                            >
                                        </div>

                                    </div>


                                    <div class="col-md-12">

                                        <input type="submit" class="btn btn-info text-white btn-send  pt-2 btn-block
                                                      " value="Send Message" />

                                    </div>

                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;