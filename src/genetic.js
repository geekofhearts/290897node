
var variable_name_offset = 96;

var operators = require('./operators');

function evaluate_function() {
    var function_as_string = arguments[0];
    var offset = 96;
    var index;
    for (index = 1; index < arguments.length; index++) {
        eval("var " + String.fromCharCode(variable_name_offset + index) + " = " + JSON.stringify(arguments[index]) + ";");
    }
    
    var ret;
    eval(function_as_string);
    
    return ret;
}

// Note that the args_array will be referred to in function_as_string as a, b, c...
function invoke_with_args(function_as_string, args_array) {
    var eval_args = [function_as_string];
    // extend the array to include the args_array vars
    eval_args.push.apply(eval_args, args_array);
    return evaluate_function.apply(evaluate_function, eval_args);
}

function test_individual(individual, test_cases) {
    var results = [];
    var i;
    for (i = 0; i < test_cases.length; i++) {
        results.push(invoke_with_args(individual['routine'], test_cases[i]['arguments']));
    }
    return results;
}

function calculate_combined_fitness_function_for_individual(individual, test_cases, results) {
    var valid = true;
    var mean = 0.0, i;
    for (i = 0; i < test_cases.length; i++) {
        valid |= test_cases[i]['validate'](results[i]);
        if (!valid) {
            break;
        }
        var test_fitness = test_cases[i]['fitness_function'](results[i]);
        mean = (mean * (i - 1) + test_fitness) / i;
    }
    individual['fitness'] = acc;
    individual['validates'] = valid;
}

function test_population(population, test_cases) {
    var results = [];
    var i;
    for (i = 0; i < population.length; i++) {
        results.push(test_individual(population[i], test_cases));
        calculate_conbined_fitness_function_for_individual(population[i], test_cases, results[i]);
    }

}

function refresh_routine_from_tokenised_repr(individual, pretty) {
    var routine = "";
    var i;
    for (i = 0; i < individual["code"]["local_vars"].length; i++) {
        var local_var = individual["code"]["local_vars"][i];
        routine += "var " + local_var["symbol"] + "=" + JSON.stringify(local_var["initial_value"]) + ";";
        if (pretty) {
            routine += "\n";
        }
    }



    individual["routine"] = routine;
}

function generate_new_individual(routine_arguments, allowed_operators, return_template) {
    var new_individual = {};
    var predefined_vars = [];
    var local_vars = [];
    var i;
    for (i = 1; i <= routine_arguments.length; i++) {
        predefined_vars.push(String.fromCharCode(variable_name_offset + i));
    }
    var number_of_local_vars = Math.random() * routine_arguments.length * 1.2;
    for (i = 1; i <= number_of_local_vars; i++) {
        var varname = routine_arguments.length + number_of_local_vars <= 26 ?
            String.fromCharCode(variable_name_offset + routine_arguments.length + i) : 
            'l' + String.fromCharCode(variable_name_offset + i);
        local_vars.push(varname);
    }
    
    // initialising values for the local vars:
    // we need to detect the types that the arguments will be and the return will expect, and adjust as required.

    // now we generate a tree of operations (and arguments)
    var routine = [];
    var number_of_root_nodes = number_of_local_vars / 3.0 + Math.random();
}
