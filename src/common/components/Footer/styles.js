import flexCentered from '../../styles/flexCentered';


export default theme => {
    const BACKGROUND = "#172947"
    return {
        root: {
            position: 'relative',
            marginTop: 55
        },

        link: {
            border: 0,
            textDecoration: 'none',
            color: theme.palette.gray[600],
            display: 'inline-block',
            padding: theme.spacing.getSpacing(1, 1),
            transition: theme.transitions.create(
                'color',
                theme.transitions.durationShort
            ),
            '&:hover': {
                color: theme.palette.gray[0]
            },
    
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing.getSpacing(1, 2),
            }
        },

        // text
        textGray: {
            color: theme.palette.gray[600]
        },
        textDarkGray: {
            color: theme.palette.grayBlue[700]
        },

        footer: {
            padding: theme.spacing.getSpacing(6, 0, 4)
        },
        row: {
            alignItems: 'center'
        },

        backgroundWrapper: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        background: {
            background: BACKGROUND,
            transformOrigin: 'left top',
        },

        bgSkewed: {
            height: '70%',
            [theme.breakpoints.up('md')]: {
                height: '100%'
            }
        },

        background2: {
            composes: '$background',
            left: '100%',
        },

        // blocks
        social: {
            marginBottom: theme.spacing.unit * 4,
        },
        nav: {
            marginBottom: theme.spacing.unit * 3
        },
        language: {
            marginBottom: theme.spacing.unit,
            textAlign: 'center',
        },
        copyright: {
            marginBottom: theme.spacing.unit * 2,
            textAlign: 'center'
        },

				logoWrapper: flexCentered,
				logo: {
					width: 80
				},
        logoLink: {
            opacity: 0.5,
            transition: theme.transitions.create('opacity'),
            '&:hover': {
                opacity: 1
            }
        },

        navWrapper: {
            textAlign: 'center',
            '&:after': {
                content: '""',
                display: 'block',
                clear: 'both'
            }
        },

        [theme.mixins.atMedia('sm')]: {
            root: {
                marginTop: 60
            },
        },

        [theme.mixins.atMedia('md')]: {
            root: {
                marginTop: 115
            },
            footer: {
                padding: theme.spacing.getSpacing(6, 0, 6)
            },
            social: {
                order: 1,
                margin: 0
            },
            nav: {
                order: 2,
                margin: 0
            },
            logoWrapper: {
                order: 3,
								margin: 0,
								marginBottom: 7
            },
            language: {
                textAlign: 'left',
                order: 4,
                marginTop: theme.spacing.unit * 4,
            },
            copyright: {
                order: 5,
                textAlign: 'right',
                marginTop: theme.spacing.unit * 4,
            },
            navWrapper: {
                float: 'right',
            },
        },
        
        [theme.mixins.atMedia('lg')]: {
            root: {
                marginTop: 120
            },
        }
    }
}