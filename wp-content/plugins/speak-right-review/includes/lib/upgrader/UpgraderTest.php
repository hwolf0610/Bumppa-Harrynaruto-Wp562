<?php

class UpgraderTest
{

    public function setUp(): void
    {
        $this->get_upgrades_list_stub();
        parent::setUp();
        // $this->reset_options();
    }

    public function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_upgrader_dummy($that)
    {
        $that->assertEquals(1, 1, 'Upgrader Test is running');
    }

    public function test_init($that, $upgrader_list)
    {
        $args = [
            'db_version' => '0.1',
            'file_version' => '0.3',
            'version_option' => 'helpie_upgrader_version',
            'slug' => 'helpie_upgrader',
        ];
        $upgrades_list = [];

        $upgrades_list_stub = $this->get_upgrades_list_stub($upgrader_list);

        /* Initialize upgrader */
        $upgrader = new \Upgrader\Upgrader($args, $upgrades_list_stub);
        $upgrader->init();

        /* Assertions */
        $that->assertEquals('0.2', $this->get_last_version_in_plugin_option());
    }

    protected function get_last_version_in_plugin_option()
    {
        $option_name = 'helpie-upgrader';
        $updated_option = get_option($option_name);

        // error_log('$updated_option : ' . print_r($updated_option, true));

        return $updated_option['last_version'];
    }

    protected function reset_options()
    {
        $option_name = 'helpie-upgrader';
        $result = \update_option($option_name, []);
    }

    protected function get_upgrades_list_stub()
    {
        $upgrades_list_stub = \Codeception\Stub::make('\StarcatReview\Includes\Upgrades_List', [
            'get_upgrades' => function () {
                $upgrades = [
                    '0.2' => 'upgrade_v02',
                ];

                return $upgrades;
            },
            'upgrade_v02' => function () {
                $option_name = 'helpie-upgrader';
                $settings = get_option($option_name);

                /* Set new version for verification later */
                $settings['last_version'] = '0.2';

                $result = \update_option($option_name, $settings);
                $updated_option = get_option($option_name);

                if (isset($updated_option['last_version']) && $updated_option['last_version'] == '0.2') {
                    $result = true;
                }

                return $result;
            },
        ]);

        return $upgrades_list_stub;
    }
} // END TEST CLASS
