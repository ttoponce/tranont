// search functionality
var tipuesearch = {"pages": [
  {"title": "Tranont | Change Life", "text": "", "tags": "Business Opportunity Jeep 4 U Vision Mission Sizzle Video Company Core Process", "url": "http://www.tranont.com"},
  {"title": "404 Error | Tranont", "text": "Please refresh the page or use the top navbar to visit a different page.", "tags": "", "url": "http://www.tranont.com/404error.html"},
  {"title": "About Us | Tranont", "text": "Tranont was launched to help people better understand personal finance and learn how to save money and pay off debt. Learn more about Tranont.", "tags": "Company Future History", "url": "http://www.tranont.com/aboutus.html"},
  {"title": "Associate Center | Tranont", "text": "The Associate Center provides tools to help Tranont Associates track their business and manage the individuals in their organization. Learn how here.", "tags": "Tools Track Business Manage Organization ID Number Group Residual Income Referral", "url": "http://www.tranont.com/associatecenter.html"},
  {"title": "Company | Tranont", "text": "Tranont is a company that is changing the world’s economy one household at a time. Our Associates and are what make this company great. Find out more about us.", "tags": "Change Life Office Location Hours Contact Us Phone Number Email Fax Address Jeep 4 U Products General Commissions Retail Services Associate Foundation Investor Relations Media Kit Logo Style Guide Support FAQ Blog Terms Conditions Policy Manual", "url": "http://www.tranont.com/company.html"},
  {"title": "Compensation | Tranont", "text": "Earn residual income, car bonuses, exciting trips, and more with the Tranont compensation plan. Click here to learn more!", "tags": "Plan Why Tranont Current Promotions Rewards Income Monthly Team Volume Bonus Pools Life Commissions Promotional Trip Incentives Business Model Vacations CEO Promotion Sponsor Financial Consultant Rank 250", "url": "http://www.tranont.com/compensation.html"},
  {"title": "Credit Services | Tranont", "text": "Tranont Credit Services allow you to gain an education in credit, improve scores and repair bad credit. Start improving your scores today!", "tags": "Establishing Monitor Monitoring Real Estate Cards Business Loans Personal Student Restoration Legal Maximizing Maximize Status Strategies Strategy Recourse Customer", "url": "http://www.tranont.com/creditservices.html"},
  {"title": "Defend | Tranont", "text": "The Tranont Defend suite of protection services gives you maximum cybersecurity protection on and off line. Get protected today.", "tags": "Products Online Identity Privacy Money Security Invisus Digital Theft Computer Tech Support Social Media Monitoring Plan Financial Personal Information Smart Phone Anti-Virus Predators Customer Reviews Customer", "url": "http://www.tranont.com/defend.html"},
  {"title": "Events | Tranont", "text": "Tranont events are both fun and motivational. View upcoming events and plan to join us.", "tags": "Celebrating Motivating National International Regional Calendar Jeep 4 U Local", "url": "http://www.tranont.com/events.html"},
  {"title": "Executives | Tranont", "text": "The Tranont Executive team are leaders in the financial industry and truly care about the success of others. Get to know them better here.", "tags": "Business Lorne Berry CEO President Chief Executive Officer Founder Scott Bland Russ Losee President Co-Founder Operating COO Jake Spencer EVP Sales Field Operations", "url": "http://www.tranont.com/executives.html"},
  {"title": "Jeep 4 U | Tranont", "text": "Tranont provides a way for associates to get rid of their monthly car payment with a car bonus program. Learn how to drive a Tranont Jeep™ here!", "tags": "250 500 Financial Consultant Rank", "url": "http://www.tranont.com/jeep4u.html"},
  {"title": "Legal | Tranont", "text": "As legal needs arise, Tranont makes it easy for you to get quick and effective legal advice that is just a phone call away. Learn how here!", "tags": "Trials Defense Services Associates Contracts Law Customer", "url": "http://www.tranont.com/legal.html"},
  {"title": "Marketing Platform | Tranont", "text": "Build your Tranont business with the marketing platform where you can share videos, website content, and more. Start building your business!", "tags": "Back Office Administration Site myTranont OneView Application Products Compensation Plans", "url": "http://www.tranont.com/marketingplatform.html"},
  {"title": "Mobile Healthcare | Tranont", "text": "Tranont Mobile Healthcare provides you with quick, easy access to healthcare professionals on the go. To save time in the future, click here to learn more.", "tags": "ACT Acute Care Triage Health Savings Benefit Plan Medical Conditions Healthcare Programs Insurance Advice Information Customer", "url": "http://www.tranont.com/mobilehealthcare.html"},
  {"title": "OneView | Tranont", "text": "Tranont OneView integrates with over 16,000 financial institutions worldwide to give you access to all your financial information in one place. Start now.", "tags": "Debt Reduction Wealth Accumulation Secure Connection VeriSign McAfee TRUSTe Idenity Theft Viruses Spyware Online Threats Associate Accounts Customer", "url": "http://www.tranont.com/oneview.html"},
  {"title": "Products | Tranont", "text": "Tranont’s financial solution products consolidate debt, improve credit scores, and provide the necessary help for you to succeed. Learn more now!", "tags": "OneView Defend Taxbot Legal Credit Services Tax Mobile Healthcare Marketing Platform Associate Center CORE Business Tools", "url": "http://www.tranont.com/products.html"},
  {"title": "Retail Services | Tranont", "text": "Gain residual income by referring products to others like merchant processors, cybersecurity, legal service, solar energy, and more. Start referring now!", "tags": "Referrals Commission Associates Merchant Processing Satellite TV Virues Identity Protection Business Telephones Background Check Services", "url": "http://www.tranont.com/retailservices.html"},
  {"title": "Solar | Tranont", "text": "Refer solar energy services and receive commissions from your efforts whether you’re in Canada or the United States. Get referring now.", "tags": "Referrals", "url": "http://www.tranont.com/solar.html"},
  {"title": "Taxbot | Tranont", "text": "Track and organize all your business expenses to help you get the most out of your yearly tax refund. Start saving on your taxes today.", "tags": "GPS Categorize Mobile Device Application Receipts Mileage Documenting Deductible", "url": "http://www.tranont.com/taxbot.html"},
  {"title": "Tax Services | Tranont", "text": "Tranont’s Tax Services give you the peace of mind during tax time with CPA’s who understand tax law and can help you get the greatest refund each year.", "tags": "Taxes Certified Public Accountants Consultation Advice Return Legal Entity Business Amended IRS Assistance Bookkeeping Financial", "url": "http://www.tranont.com/taxservices.html"}
]};
// open navbar dropdown menu on hover instead of on click
$(function(){
  $('.dropdown').hover(function() {
      $(this).addClass('open');
  },
  function() {
      $(this).removeClass('open');
  });
});
// FAQ accordion functionality
$(document).ready(function() {
    var parentDivs = $('#nestedAccordion div'),
    childDivs = $('#nestedAccordion h3').siblings('div');

    $('#nestedAccordion h2').click(function(){
        parentDivs.slideUp();
        if($(this).next().is(':hidden')){
            $(this).next().slideDown();
        }else{
            $(this).next().slideUp();
        }
    });
    $('#nestedAccordion h3').click(function(){
        childDivs.slideUp();
        if($(this).next().is(':hidden')){
            $(this).next().slideDown();
        }else{
            $(this).next().slideUp();
        }
    });
});
// color toggle for page buttons
$(".merchant-button").hover(function() {
  $(".merchant-title").toggleClass("merchant-title-color");
});
$(".tv-button").hover(function() {
  $(".tv-title").toggleClass("tv-title-color");
});
$(".protection-button").hover(function() {
  $(".protection-title").toggleClass("protection-title-color");
});
$(".telephones-button").hover(function() {
  $(".telephones-title").toggleClass("telephones-title-color");
});
$(".legal-button").hover(function() {
  $(".legal-title").toggleClass("legal-title-color");
});
$(".background-button").hover(function() {
  $(".background-title").toggleClass("background-title-color");
});
$(".solar-button").hover(function() {
  $(".solar-title").toggleClass("solar-title-color");
});
$(".residual-button").hover(function() {
  $(".residual-title").toggleClass("residual-title-color");
});
$(".team-button").hover(function() {
  $(".team-title").toggleClass("team-title-color");
});
$(".car-button").hover(function() {
  $(".car-title").toggleClass("car-title-color");
});
$(".pools-button").hover(function() {
  $(".pools-title").toggleClass("pools-title-color");
});
$(".life-button").hover(function() {
  $(".life-title").toggleClass("life-title-color");
});
$(".commissions-button").hover(function() {
  $(".commissions-title").toggleClass("commissions-title-color");
});
$(".promotional-button").hover(function() {
  $(".promotional-title").toggleClass("promotional-title-color");
});
$(".plan-button").hover(function() {
  $(".plan-title").toggleClass("plan-title-color");
});
$(".monthly-button").hover(function() {
  $(".monthly-title").toggleClass("monthly-title-color");
});
$(".vacation-button").hover(function() {
  $(".vacation-title").toggleClass("vacation-title-color");
});
$(".ceo-button").hover(function() {
  $(".ceo-title").toggleClass("ceo-title-color");
});
// change the direction of the Font Awesome caret when panel expand and collapse
$('.button').click(function(){
  $(this).find('span').toggleClass('glyphicon-triangle-right').toggleClass('glyphicon-triangle-bottom');
});
$('.collapse').on('show.bs.collapse', function() {
  $(this).parent().find(".glyphicon-triangle-right").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
}).on('hide.bs.collapse', function() {
  $(this).parent().find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
});
// toggle class depending on browser width
$(function(){
  var $window = $(window),
      $img = $('.exec-img');

  $window.resize(function resize() {
    if ($window.width() < 535) {
      $img.removeClass('col-xs-4');
      return $img.addClass('col-xs-12');
    }
    $img.removeClass('col-xs-12');
    $img.addClass('col-xs-4');
  }).trigger('resize');
});

$(function(){
  var $window = $(window),
      $text = $('.exec-bio');

  $window.resize(function resize() {
    if ($window.width() < 535) {
      $text.removeClass('col-xs-8');
      return $text.addClass('col-xs-12');
    }
    $text.removeClass('col-xs-12');
    $text.addClass('col-xs-8');
  }).trigger('resize');
});
// script to load index.html video onclick
$('#video-button').click(function(){
  $('.top-row').fadeOut('slow');
  $('.top-row-video').css('display', 'block');
});
$('#video-button').click(function() {
  $('.top-section-video-play').after('<video class="top-video" autoplay controls><source src="https://s3-us-west-2.amazonaws.com/tranontmedia/Tranont_Intro_small.webm" type="video/webm"><source src="https://s3-us-west-2.amazonaws.com/tranontmedia/Tranont_Intro_small.mp4" type="video/mp4"> Your browser does not support playing this video.</video>')
});
