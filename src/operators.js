var Operators = {
    'number' : [
	{
	    'repr' : '1+2',
	    'type' : 'binary'
	},
	{
	    'repr' : '1-2',
	    'type' : 'binary'
	},
	{
	    'repr' : '1*2',
	    'type' : 'binary'
	},
	{
	    'repr' : '1/2',
	    'type' : 'binary'
	},
	{
	    'repr' : '1%2',
	    'type' : 'binary'
	},
	{
	    'repr' : 'Math.max(1, 2)',
	    'type' : 'binary'
	},
	{
	    'repr' : 'Math.min(1, 2)',
	    'type' : 'binary'
	},
	{
	    'repr' : 'Math.atan2(1, 2)',
	    'type' : 'binary'
	},
	{
	    'repr' : 'Math.pow(1, 2)',
	    'type' : 'binary'
	},
	{
	    'repr' : 'Math.abs(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.acos(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.asin(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.atan(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.ceil(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.cos(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.exp(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.floor(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.log(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.round(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.sin(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.sqrt(Math.abs(1))',
	    'type' : 'unary'
	},
	{
	    'repr' : 'Math.tan(1)',
	    'type' : 'unary'
	},
	{
	    'repr' : '1++',
	    'type' : 'unary'
	},
	{
	    'repr' : '1--',
	    'type' : 'unary'
	},
	{
	    'repr' : '++1',
	    'type' : 'unary'
	},
	{
	    'repr' : '--1',
	    'type' : 'unary'
	}
    ],
    'string':{},
    'object':{}
};

module.exports = Operators;
