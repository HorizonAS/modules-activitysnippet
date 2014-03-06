from common.pages.base import PageObjectFactory
from activitystreams.pages.home_page import ActivitySnippetHomePage
from hamcrest import assert_that, is_not, is_


# **************** GIVEN STEPS ****************
@given('I am on the activity snippet home page')
def step(context):
    context.page = PageObjectFactory().create(ActivitySnippetHomePage)
    context.page.open()


# **************** WHEN STEPS ****************
@when('I click on the "{index}" eye')
def step(context, index):
    context.page.click_eye_by_index(index)


@when('I click on the "{index}" heart')
def step(context, index):
    context.page.click_heart_by_index(index)


# **************** THEN STEPS ****************
@then('I should see the "{title}" as title')
def step(context, title):
    assert_that(context.page.get_page_title(), is_(title))


@then('I should see the "{subtitle}" as subtitle')
def step(context, subtitle):
    assert_that(context.page.get_page_subtitle(), is_(subtitle))


@then('I should see the user logged in')
def step(context):
    assert_that(context.page.is_user_logged())


@then('I should see the "{index}" eye as watched')
def step(context, index):
    assert_that(is_not(context.page.is_eye_not_watched_by_index(index)))


@then('I should see the "{index}" eye as unwatched')
def step(context, index):
    assert_that(context.page.is_eye_not_watched_by_index(index))


@then('I should see the "{index}" heart as liked')
def step(context, index):
    assert_that(is_not(context.page.is_heart_not_selected_by_index(index)))


@then('I should see the "{index}" heart as unliked')
def step(context, index):
    assert_that(context.page.is_heart_not_selected_by_index(index))
