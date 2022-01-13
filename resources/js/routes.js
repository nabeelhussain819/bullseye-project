import React from 'react'
import {Route} from 'react-router-dom'
import {ConnectedSwitch} from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'components/LayoutComponents/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import HomePage from 'pages/DefaultPages/HomePage'

const loadable = loader =>
    Loadable({
        loader,
        delay: false,
        loading: () => null,
    });

const loadableRoutes = {
    '/calendar/month': {
        component: loadable(() => import('pages/Calendar/Month')),
    },
    '/calendar/roomAllocation': {
        component: loadable(() => import('pages/Calendar/RoomAllocation')),
    },
    '/calendar/speakerAvailability': {
        component: loadable(() => import('pages/Calendar/SpeakerAvailability')),
    },
    '/calendar/agendaDayView': {
        component: loadable(() => import('pages/Calendar/AgendaDayView')),
    },
    '/calendar/managerAllocation': {
        component: loadable(() => import('pages/Calendar/BriefingManagerAllocation')),
    },
    '/calendar/availability': {
        component: loadable(() => import('pages/Calendar/Availability')),
    },
    '/calendar/notes/:id/:view?': {
        component: loadable(() => import('pages/Calendar/Month/Month/Note')),
    },
    '/home/:category?': {
        component: loadable(() => import('pages/Dashboard/HomePage')),
    },
    '/administration': {
        component: loadable(() => import('pages/Administration/DefaultPage')),
    },
    '/administration/employees': {
        component: loadable(() => import('pages/Administration/Employees')),
    },
    '/administration/employees/sync': {
        component: loadable(() => import('pages/Administration/Employees/Sync')),
    },
    '/administration/employees/:id': {
        component: loadable(() => import('pages/Administration/Employees/Form')),
    },
    '/administration/centers': {
        component: loadable(() => import('pages/Administration/Centers')),
    },
    '/administration/centers/:id': {
        component: loadable(() => import('pages/Administration/Centers/Form')),
    },
    '/administration/roomTypes': {
        component: loadable(() => import('pages/Administration/RoomTypes')),
    },
    '/administration/roomTypes/:id': {
        component: loadable(() => import('pages/Administration/RoomTypes/Form')),
    },
    '/administration/rooms': {
        component: loadable(() => import('pages/Administration/Rooms')),
    },
    '/administration/rooms/:id': {
        component: loadable(() => import('pages/Administration/Rooms/Form')),
    },
    '/administration/grids': {
        component: loadable(() => import('pages/Administration/Grids')),
    },
    '/administration/grids/:id': {
        component: loadable(() => import('pages/Administration/Grids/Form')),
    },
    '/administration/briefingTypes': {
        component: loadable(() => import('pages/Administration/BriefingTypes')),
    },
    '/administration/briefingTypes/:id': {
        component: loadable(() => import('pages/Administration/BriefingTypes/Form')),
    },
    '/administration/briefingManagers': {
        component: loadable(() => import('pages/Administration/BriefingManagers')),
    },
    '/administration/briefingManagers/:id': {
        component: loadable(() => import('pages/Administration/BriefingManagers/Form')),
    },
    '/administration/venues': {
        component: loadable(() => import('pages/Administration/Venues')),
    },
    '/administration/venues/:id': {
        component: loadable(() => import('pages/Administration/Venues/Form')),
    },
    '/administration/reports': {
        component: loadable(() => import('pages/Administration/Reports')),
    },
    '/administration/reports/:id': {
        component: loadable(() => import('pages/Administration/Reports/Form')),
    },
    '/administration/regions': {
        component: loadable(() => import('pages/Administration/Regions')),
    },
    '/administration/regions/:id': {
        component: loadable(() => import('pages/Administration/Regions/Form')),
    },
    '/administration/announcements': {
        component: loadable(() => import('pages/Administration/Announcements')),
    },
    '/administration/announcements/:id': {
        component: loadable(() => import('pages/Administration/Announcements/Form')),
    },
    '/administration/gifts': {
        component: loadable(() => import('pages/Administration/Gifts')),
    },
    '/administration/gifts/:id': {
        component: loadable(() => import('pages/Administration/Gifts/Form')),
    },
    '/administration/medium': {
        component: loadable(() => import('pages/Administration/Media')),
    },
    '/administration/medium/:id': {
        component: loadable(() => import('pages/Administration/Media/Form')),
    },
    '/administration/statuses': {
        component: loadable(() => import('pages/Administration/Statuses')),
    },
    '/administration/statuses/:id': {
        component: loadable(() => import('pages/Administration/Statuses/Form')),
    },
    '/administration/industries': {
        component: loadable(() => import('pages/Administration/Industries')),
    },
    '/administration/industries/:id': {
        component: loadable(() => import('pages/Administration/Industries/Form')),
    },
    '/administration/mealTypes': {
        component: loadable(() => import('pages/Administration/MealTypes')),
    },
    '/administration/mealTypes/:id': {
        component: loadable(() => import('pages/Administration/MealTypes/Form')),
    },
    '/administration/meals': {
        component: loadable(() => import('pages/Administration/Meals')),
    },
    '/administration/meals/:id': {
        component: loadable(() => import('pages/Administration/Meals/Form')),
    },
    '/administration/audiences': {
        component: loadable(() => import('pages/Administration/Audiences')),
    },
    '/administration/audiences/:id': {
        component: loadable(() => import('pages/Administration/Audiences/Form')),
    },
    '/administration/forms/briefing/:formSectionId?': {
        component: loadable(() => import('pages/Administration/Forms/')),
    },
    '/administration/forms/multiclient/:formSectionId?': {
        component: loadable(() => import('pages/Administration/MultiClientForm/')),
    },
    '/administration/evaluation/questions/:category': {
        component: loadable(() => import('pages/Administration/EvaluationQuestions')),
    },
    '/administration/evaluation/questions/:category/:id': {
        component: loadable(() => import('pages/Administration/EvaluationQuestions/Form')),
    },
    '/administration/evaluation/types': {
        component: loadable(() => import('pages/Administration/EvaluationTypes')),
    },
    '/administration/evaluation/types/:id': {
        component: loadable(() => import('pages/Administration/EvaluationTypes/Form')),
    },
    '/briefing/request/:centerId/:briefingTypeId': {
        component: loadable(() => import('pages/Briefing/Request')),
    },
    '/briefing/request/:briefingId': {
        component: loadable(() => import('pages/Briefing/Request')),
    },
    '/salesforce/briefing/request/:briefingId/:isSalesforce/:DsrId': {
        component: loadable(() => import('pages/Briefing/Request')),
    },
    '/briefing/direct/:briefingId': {
        component: loadable(() => import('pages/Briefing/Request')),
    },
    '/briefing/edit/:id/:section?': {
        component: loadable(() => import('pages/Briefing/Edit')),
    },
    '/briefing/view/:id/:layoutId?': {
        component: loadable(() => import('pages/Briefing/View')),
    },
    /**
     * Task #9460: URL Redirection of old urls to their relevant v3 counterparts
     */
    '/briefing/view': {
        component: loadable(() => import('pages/Briefing/View')),
    },
    '/reports/:id?': {
        component: loadable(() => import('pages/Report')),
    },
    '/administration/formLogic': {
        component: loadable(() => import('pages/Administration/FormLogic')),
    },
    '/administration/formLogic/:id': {
        component: loadable(() => import('pages/Administration/FormLogic/Form')),
    },
    '/administration/topicCategories': {
        component: loadable(() => import('pages/Administration/TopicCategories')),
    },
    '/administration/topicCategories/:id': {
        component: loadable(() => import('pages/Administration/TopicCategories/Form')),
    },
    '/administration/attendeeRoles': {
        component: loadable(() => import('pages/Administration/AttendeeRoles')),
    },
    '/administration/attendeeRoles/:id': {
        component: loadable(() => import('pages/Administration/AttendeeRoles/Form')),
    },
    '/administration/speakerOrganizations': {
        component: loadable(() => import('pages/Administration/SpeakerOrganizations')),
    },
    '/administration/speakerOrganizations/:id': {
        component: loadable(() => import('pages/Administration/SpeakerOrganizations/Form')),
    },
    '/administration/sessions': {
        component: loadable(() => import('pages/Administration/Sessions')),
    },
    '/administration/salutations': {
        component: loadable(() => import('pages/Administration/Salutations')),
    },
    '/administration/salutations/:id': {
        component: loadable(() => import('pages/Administration/Salutations/Form')),
    },
    '/administration/notes/index/:view?': {
        component: loadable(() => import('pages/Administration/Notes')),
    },
    '/administration/notes/:id/:view?': {
        component: loadable(() => import('pages/Administration/Notes/Form')),
    },
    '/administration/noteTypes': {
        component: loadable(() => import('pages/Administration/NoteTypes')),
    },
    '/administration/noteTypes/:id': {
        component: loadable(() => import('pages/Administration/NoteTypes/Form')),
    },
    '/administration/groups': {
        component: loadable(() => import('pages/Administration/Groups')),
    },
    '/administration/groups/:id': {
        component: loadable(() => import('pages/Administration/Groups/Form')),
    },
    '/administration/quickLinks': {
        component: loadable(() => import('pages/Administration/QuickLinks')),
    },
    '/administration/quickLinks/:id': {
        component: loadable(() => import('pages/Administration/QuickLinks/Form')),
    },
    '/administration/topics': {
        component: loadable(() => import('pages/Administration/Topics')),
    },
    '/administration/topics/:id': {
        component: loadable(() => import('pages/Administration/Topics/Form')),
    },
    '/administration/api/users': {
        component: loadable(() => import('pages/Administration/ApiUsers')),
    },
    '/administration/api/users/:id': {
        component: loadable(() => import('pages/Administration/ApiUsers/Form')),
    },
    '/administration/users': {
        component: loadable(() => import('pages/Administration/Users')),
    },
    '/administration/users/merge': {
        component: loadable(() => import('pages/Administration/Users/Merge')),
    },
    '/administration/users/:id': {
        component: loadable(() => import('pages/Administration/Users/Form')),
    },
    '/administration/settings/:id?': {
        component: loadable(() => import('pages/Administration/Settings/Form')),
    },
    '/administration/roles': {
        component: loadable(() => import('pages/Administration/Roles/Form')),
    },
    '/administration/webHooks': {
        component: loadable(() => import('pages/Administration/WebHooks/Form')),
    },
    '/administration/notificationSettings': {
        component: loadable(() => import('pages/Administration/NotificationSettings/')),
    },
    '/administration/calendarBuilder': {
        component: loadable(() => import('pages/Administration/CalendarBuilder/')),
    },
    '/administration/speakers': {
        component: loadable(() => import('pages/Administration/Speakers')),
    },
    '/administration/speakers/:id': {
        component: loadable(() => import('pages/Administration/Speakers/Form')),
    },
    '/administration/fieldLayouts': {
        component: loadable(() => import('pages/Administration/FieldLayouts')),
    },
    '/administration/FieldLayouts/:id': {
        component: loadable(() => import('pages/Administration/FieldLayouts/Form')),
    },
    '/administration/formSections/logistics': {
        component: loadable(() => import('pages/Administration/FormSections/logistics')),
    },
    '/administration/formSections/logistics/:id/:parentId?': {
        component: loadable(() => import('pages/Administration/FormSections/Form')),
    },
    '/administration/formSections': {
        component: loadable(() => import('pages/Administration/FormSections')),
    },
    '/administration/formSections/:id': {
        component: loadable(() => import('pages/Administration/FormSections/Form')),
    },
    '/administration/emailTemplates': {
        component: loadable(() => import('pages/Administration/EmailTemplates')),
    },
    '/administration/emailTemplates/:id': {
        component: loadable(() => import('pages/Administration/EmailTemplates/Form')),
    },
    '/administration/featureCustomizations/:id?': {
        component: loadable(() => import('pages/Administration/FeatureCustomizations/Form')),
    },
    '/administration/deletedBriefings': {
        component: loadable(() => import('pages/Administration/DeletedBriefings')),
    },

    '/administration/documentCategories': {
        component: loadable(() => import('pages/Administration/DocumentCategories')),
    },
    '/administration/documentCategories/:id': {
        component: loadable(() => import('pages/Administration/DocumentCategories/Form')),
    },
    '/administration/documents': {
        component: loadable(() => import('pages/Administration/Documents')),
    },
    '/administration/documents/:id': {
        component: loadable(() => import('pages/Administration/Documents/Form')),
    },
    '/help': {
        component: loadable(() => import('pages/Help')),
    },
    '/search/notes': {
        component: loadable(() => import('pages/Search/Notes')),
    },
    '/search/briefings': {
        component: loadable(() => import('pages/Search/Briefings')),
    },
    '/speakers/program': {
        component: loadable(() => import('pages/Search/Speaker')),
    },
    '/speakers/program/profile/:id?': {
        component: loadable(() => import('pages/Search/Speaker/SpeakerProfile')),
    },
    '/user/edit': {
        component: loadable(() => import('pages/User')),
    }
};

class Routes extends React.Component {
    timeoutId = null;

    componentDidMount() {
        this.timeoutId = setTimeout(
            () => {
                Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload())
            }, 2000, // load after 0.5 sec
        )
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    render() {
        return (
            <ConnectedSwitch>
                <Route exact path="/" component={HomePage}/>
                {Object.keys(loadableRoutes).map(path => {
                    const {exact, ...props} = loadableRoutes[path];
                    props.exact = exact === void 0 || exact || false; // set true as default
                    const Component = props.component;

                    // return <Route key={path} path={path} {...props} onEnter={(ns, rep) => {
                    //     console.log([ns, rep]);
                    // }}/>
                    // Issue of Page not reloading on params change:
                    // see :
                    // https://code-examples.net/en/q/1ec4541
                    // https://github.com/ReactTraining/react-router/issues/1982
                    // https://tylermcginnis.com/react-router-pass-props-to-components/
                    return <Route key={path}
                                  path={path}
                                  exact={props.exact}
                                  render={(props) => {
                                      const params = props.match.params;
                                      const key = Object.values(params).join('-');
                                      if (key) {
                                          return <Component key={key} {...props} />
                                      }
                                      return <Component {...props} />
                                  }}
                                  onEnter={(ns, rep) => {
                                      //     console.log([ns, rep]);
                                  }}
                    />

                })}
                <Route
                    render={() => (
                        <Page>
                            <NotFoundPage/>
                        </Page>
                    )}
                />
            </ConnectedSwitch>
        )
    }
}

export {loadableRoutes}
export default Routes
