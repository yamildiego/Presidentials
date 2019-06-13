<?php

if (!function_exists('form_email'))
{

    /**
     * Text Input Field
     *
     * @param	mixed
     * @param	string
     * @param	string
     * @return	string
     */
    function form_email($data = '', $value = '', $extra = '')
    {
        $defaults = array('type' => 'email',
            'name' => ((!is_array($data)) ? $data : ''),
            'value' => $value
        );

        return "<input " . _parse_form_attributes($data, $defaults) . $extra . " />";
    }

}

if (!function_exists('form_text'))
{

    /**
     * Form text
     * @param type $input_text texto 
     * @param type $class clase applicada al div
     * @param type $id id del div
     * @param type $is_boolean si es booleando (si/no)
     * @param type $attributes atributes extras
     * @param type $value_default valor por defecto si no hay valor en $input_text
     * @return string
     */
    function form_text($input_text = '', $class = '', $is_boolean = false, $attributes = array(), $value_default = ' - ')
    {
        $text = '<div';

        if ($class !== '')
            $text .= ' class="' . $class . '"';

        if ($is_boolean)
            $input_text = ($input_text) ? 'Si' : 'No';

        if (is_array($attributes) && count($attributes) > 0)
            foreach ($attributes as $key => $val)
                $text .= ' ' . $key . '="' . $val . '"';

        return $text . '>' . (($input_text === null || $input_text === "") ? $value_default : $input_text) . '</div>';
    }

}

if (!function_exists('form_number'))
{

    /**
     * Text Input Field
     *
     * @param	mixed
     * @param	string
     * @param	string
     * @return	string
     */
    function form_number($data = '', $value = '', $extra = '')
    {
        $defaults = array(
            'type' => 'number',
            'name' => is_array($data) ? '' : $data,
            'value' => $value
        );

        return '<input ' . _parse_form_attributes($data, $defaults) . $extra . " />\n";
    }

}
if (!function_exists('form_time'))
{

    /**
     * Text Input Field
     *
     * @param	mixed
     * @param	string
     * @param	string
     * @return	string
     */
    function form_time($data = '', $value = '', $extra = '')
    {
        $defaults = array(
            'type' => 'time',
            'name' => is_array($data) ? '' : $data,
            'value' => $value
        );

        return '<input ' . _parse_form_attributes($data, $defaults) . $extra . " />\n";
    }

}

if (!function_exists('form_date'))
{

    /**
     * Text Input Field
     *
     * @param	mixed
     * @param	string
     * @param	string
     * @return	string
     */
    function form_date($data = '', $value = '', $extra = '')
    {
        $defaults = array(
            'type' => 'date',
            'name' => is_array($data) ? '' : $data,
            'value' => $value
        );

        return '<input ' . _parse_form_attributes($data, $defaults) . $extra . " />\n";
    }

}